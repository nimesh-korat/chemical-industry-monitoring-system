const connectDB = require("../../db/dbConnect");

async function ViewusersData(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("users");

    const usersData = await collection.find({}).toArray();

    if (usersData.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "No Data Found!!" });
    }
    res.status(200).json({
      data: usersData,
      success: true,
      message: "Data Found Successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ViewusersData };
