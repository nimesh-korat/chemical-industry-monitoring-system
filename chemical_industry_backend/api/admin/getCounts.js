// Import necessary modules
const connectDB = require("../../db/dbConnect");

// Define async function to fetch total counts
async function GetCounts(req, res) {
  try {
    const db = await connectDB();
    const complaintsCollection = db.collection("complaints");
    const deviceCollection = db.collection("devices");
    const usersCollection = db.collection("users");

    // Fetch total counts
    const totalComplaintsCount = await complaintsCollection.countDocuments();
    const totalDeviceCount = await deviceCollection.countDocuments();
    const totalUsersCount = await usersCollection.countDocuments();

    // Fetch total alerts count
    const tempCollection = db.collection("temprature");
    const fireCollection = db.collection("fire");
    const smokeCollection = db.collection("smoke");
    const mq3Collection = db.collection("mq_3");
    const mq135Collection = db.collection("mq_135");
    const mqToxicGasCollection = db.collection("mq_toxic_gas");

    const totalTemperatureAlerts = await tempCollection.countDocuments({
      sensorValue: { $gt: 40 },
    });
    const totalFireAlerts = await fireCollection.countDocuments({
      sensorValue: { $gt: 40 },
    });
    const totalSmokeAlerts = await smokeCollection.countDocuments({
      sensorValue: { $gt: 40 },
    });
    const totalMQ3Alerts = await mq3Collection.countDocuments({
      sensorValue: { $gt: 40 },
    });
    const totalMQ135Alerts = await mq135Collection.countDocuments({
      sensorValue: { $gt: 40 },
    });
    const totalMQToxicGasAlerts = await mqToxicGasCollection.countDocuments({
      sensorValue: { $gt: 40 },
    });

    const totalAlertsCount =
      totalTemperatureAlerts +
      totalFireAlerts +
      totalSmokeAlerts +
      totalMQ3Alerts +
      totalMQ135Alerts +
      totalMQToxicGasAlerts;

    res.status(200).json({
      totalComplaints: totalComplaintsCount,
      totalAlerts: totalAlertsCount,
      totalDevices: totalDeviceCount,
      totalUsers: totalUsersCount,
      success: true,
      message: "Counts fetched successfully!",
    });
  } catch (error) {
    console.error("Error fetching counts:", error);
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { GetCounts };
