const connectDB = require("../../db/dbConnect");

async function ViewFireData(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("fire");
    const deviceCollection = db.collection("devices");

    const fireDataWithDevices = await collection.aggregate([
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

    if (fireDataWithDevices.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "No Data Found!!" });
    }

    res.status(200).json({
      data: fireDataWithDevices,
      success: true,
      message: "Data Found Successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ViewFireData };
