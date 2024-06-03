const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function ShowAlerts(req, res) {
  try {
    const db = await connectDB();
    const session = req.session.user;
    const deviceCollection = db.collection("devices");

    if (!session) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized access!" });
    }

    const userId = new ObjectId(session.session._id);

    const deviceData = await deviceCollection.findOne({ userId });
    if (!deviceData) {
      return res
        .status(401)
        .json({ success: false, message: "No any data found!" });
    }

    const deviceId = new ObjectId(deviceData._id);

    const sensorGreaterValues = {
      fire: 50, //collection name : max value for alert
      mq_135: 60,
      mq_3: 35,
      mq_toxic_gas: 45,
      smoke: 25,
      temprature: 30,
    };

    const sensorNames = {
      fire: "Fire Sensor",
      mq_135: "MQ 135 Sensor",
      mq_3: "MQ3 Sensor",
      mq_toxic_gas: "MQ Toxic Gas Sensor",
      smoke: "Smoke Sensor",
      temprature: "Temperature Sensor",
    };

    const collections = Object.keys(sensorGreaterValues);

    const results = await Promise.all(
      collections.map(async (collectionName) => {
        const collection = db.collection(collectionName);
        const greaterThanValue = sensorGreaterValues[collectionName];
        const sensorName = sensorNames[collectionName];

        const pipeline = [
          {
            $match: {
              deviceId: deviceId, // Match documents for a specific device
            },
          },
          {
            $group: {
              _id: null,
              sensorValues: { $push: "$sensorValue" }, // Push all sensor values into an array
            },
          },
          {
            $project: {
              lastSensorValue: { $arrayElemAt: ["$sensorValues", -1] }, // Get the last sensor value from the array
            },
          },
        ];

        const data = await collection.aggregate(pipeline).toArray();

        if (data.length > 0 && data[0].lastSensorValue > greaterThanValue) {
          return { sensorName, sensorValue: data[0].lastSensorValue };
        }
        return null;
      })
    );

    const filteredResults = results.filter((result) => result !== null);

    if (filteredResults.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No data found!" });
    }

    res.status(200).json({
      alerts: filteredResults,
      success: true,
      message: "Data found successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ShowAlerts };
