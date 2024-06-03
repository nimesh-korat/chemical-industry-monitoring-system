const connectDB = require("../../db/dbConnect");

async function AddFeedback(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("feedback");

    const { userName, rating, review } = req.body;

    if (!userName || !rating || !review) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields!" });
    }

    //! Get current timestamp in IST
    const ISTOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
    const dateIST = new Date(Date.now() + ISTOffset);

    await collection.insertOne({
      userName,
        rating,
        review,
      timestamp: dateIST,
    });

    return res
      .status(201)
      .json({ success: true, message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res
      .status(500)
      .json({ success: false, error: "Registration Failed" });
  }
}

module.exports = { AddFeedback };
