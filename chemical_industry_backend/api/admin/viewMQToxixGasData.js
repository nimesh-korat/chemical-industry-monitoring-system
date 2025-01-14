const connectDB = require("../../db/dbConnect");

async function ViewMQToxicGasData(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("mq_toxic_gas");
    const deviceCollection = db.collection("devices");

    const mqToxicDataWithDevices = await collection.aggregate([
      {
        $lookup: {
          from: "devices",
          localField: "deviceId",
          foreignField: "_id",
          as: "deviceData",
        },
      },
      {
        $unwind: "$deviceData",
      },
      {
        $project: {
          _id: 1,
          deviceId: 1,
          sensorValue: 1,
          timestamp: 1,
          deviceName: "$deviceData.deviceName",
          area: "$deviceData.area",
          userId: "$deviceData.userId",
        },
      },
    ]).toArray();

    if (mqToxicDataWithDevices.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "No Data Found!!" });
    }

    res.status(200).json({
      data: mqToxicDataWithDevices,
      success: true,
      message: "Data Found Successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ViewMQToxicGasData };
