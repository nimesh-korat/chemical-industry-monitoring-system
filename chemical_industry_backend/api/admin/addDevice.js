const connectDB = require("../../db/dbConnect");

async function AddDevice(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("devices");

    const { deviceName } = req.body;

    if (!deviceName) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields!" });
    }

    await collection.insertOne({
      deviceName
    });

    return res
      .status(201)
      .json({ success: true, message: "Device added successfully" });
  } catch (error) {
    console.error("Error adding device:", error);
    return res
      .status(500)
      .json({ success: false, error: "Something Went Wrong" });
  }
}

module.exports = { AddDevice };
