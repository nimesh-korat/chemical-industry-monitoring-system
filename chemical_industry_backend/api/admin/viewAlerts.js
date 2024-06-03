const connectDB = require("../../db/dbConnect");

async function ViewAlerts(req, res) {
  try {
    const db = await connectDB();

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
            $group: {
              _id: "$deviceId",
              lastSensorValue: { $last: "$sensorValue" },
              lastTimestamp: { $last: "$timestamp" }, // Add last timestamp
            },
          },
          {
            $match: {
              lastSensorValue: { $gt: greaterThanValue },
            },
          },
          {
            $lookup: {
              from: "devices",
              localField: "_id",
              foreignField: "_id",
              as: "device",
            },
          },
          {
            $unwind: "$device",
          },
          {
            $project: {
              sensorName,
              sensorValue: "$lastSensorValue",
              timestamp: "$lastTimestamp", // Include timestamp
              userId: "$device.userId",
              deviceName: "$device.deviceName",
              area: "$device.area",
            },
          },
        ];

        const data = await collection.aggregate(pipeline).toArray();

        return data;
      })
    );

    const flattenedResults = results.flat();

    if (flattenedResults.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No data found!" });
    }

    res.status(200).json({
      alerts: flattenedResults,
      success: true,
      message: "Data found successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ViewAlerts };
