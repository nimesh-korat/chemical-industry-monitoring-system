const connectDB = require("../../db/dbConnect");
const { ObjectId } = require("mongodb");

async function GetHistoryData(req, res) {
  try {

    const db = await connectDB();

    const fireCollection = db.collection("fire");
    const mq135Collection = db.collection("mq_135");
    const mq3Collection = db.collection("mq_3");
    const mqToxicGasCollection = db.collection("mq_toxic_gas");
    const smokeCollection = db.collection("smoke");
    const tempCollection = db.collection("temprature");
    const deviceCollection = db.collection("devices");

    const session = req.session.user;

    if (!session) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized access!" });
    }

    const userId = session.session._id;
    const deviceData = await deviceCollection.findOne({ userId: new ObjectId(userId) });

    if (!deviceData) {
      return res
        .status(401)
        .json({ success: false, message: "No any data found!" });
    }

    const fireData = await fireCollection.find({ deviceId: new ObjectId(deviceData._id) }).toArray();
    const mq3Data = await mq3Collection.find({ deviceId: new ObjectId(deviceData._id) }).toArray();
    const mqToxicGasData = await mqToxicGasCollection.find({ deviceId: new ObjectId(deviceData._id) }).toArray();
    const mq135Data = await mq135Collection.find({ deviceId: new ObjectId(deviceData._id) }).toArray();
    const smokeData = await smokeCollection.find({ deviceId: new ObjectId(deviceData._id) }).toArray();
    const tempData = await tempCollection.find({ deviceId: new ObjectId(deviceData._id) }).toArray();

    const data = { fireData, mq3Data, mqToxicGasData, mq135Data, smokeData, tempData };
    // const data = await collection
    //   .aggregate([
    //     {
    //       $match: {
    //         userId: new ObjectId(session.session._id),
    //       },
    //     },
    //   ])
    //   .toArray();

    if (data.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "No any data found!" });
    }
    res
      .status(200)
      .json({ data, success: true, message: "Data Found Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { GetHistoryData };
