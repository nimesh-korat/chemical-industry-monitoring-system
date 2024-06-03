// Import necessary modules
const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

// Define async function to fetch Live data from each collection for a specific user
async function GetLiveData(req, res) {
    try {
        const db = await connectDB();

        const session = req.session.user;

        if (!session) {
            return res
                .status(401)
                .json({ success: false, message: "Unauthorized access!" });
        }
        const userId = session.session._id;
        const deviceCollection = db.collection("devices");

        const fireCollection = db.collection("fire");
        const mq135Collection = db.collection("mq_135");
        const mq3Collection = db.collection("mq_3");
        const mqToxicGasCollection = db.collection("mq_toxic_gas");
        const smokeCollection = db.collection("smoke");
        const tempCollection = db.collection("temprature");

        const deviceData = await deviceCollection.findOne(
            { userId: new ObjectId(userId) },
        )

        if (!deviceData) {
            return res
                .status(401)
                .json({ success: false, message: "No any data found!" });
        }


        // Fetch Live data from each collection for the given user ID
        const fireData = await fireCollection.findOne(
            { deviceId: new ObjectId(deviceData._id) },
            {
                sort: { timestamp: -1 },
                projection: { sensorValue: 1, sensorName: "Fire Sensor", _id: 0 },
            }
        );
        const mq3Data = await mq3Collection.findOne(
            { deviceId: new ObjectId(deviceData._id) },
            {
                sort: { timestamp: -1 },
                projection: { sensorValue: 1, sensorName: "MQ3 Sensor", _id: 0 },
            }
        );
        const mqToxicGasData = await mqToxicGasCollection.findOne(
            { deviceId: new ObjectId(deviceData._id) },
            {
                sort: { timestamp: -1 },
                projection: { sensorValue: 1, sensorName: "MQ Toxics Gas Sensor", _id: 0 },
            }
        );
        const mq135Data = await mq135Collection.findOne(
            { deviceId: new ObjectId(deviceData._id) },
            {
                sort: { timestamp: -1 },
                projection: { sensorValue: 1, sensorName: "MQ135 Sensor", _id: 0 },
            }
        );
        const smokeData = await smokeCollection.findOne(
            { deviceId: new ObjectId(deviceData._id) },
            {
                sort: { timestamp: -1 },
                projection: { sensorValue: 1, sensorName: "Smoke Sensor", _id: 0 },
            }
        );
        const tempData = await tempCollection.findOne(
            { deviceId: new ObjectId(deviceData._id) },
            {
                sort: { timestamp: -1 },
                projection: { sensorValue: 1, sensorName: "Temprature Sensor", _id: 0 },
            }
        );

        // Construct the response object with required format
        const liveData = [];
        if (fireData)
            liveData.push({
                sensorName: fireData.sensorName,
                sensorValue: fireData.sensorValue,
            });
        if (mq3Data)
            liveData.push({
                sensorName: mq3Data.sensorName,
                sensorValue: mq3Data.sensorValue,
            });
        if (mqToxicGasData)
            liveData.push({
                sensorName: mqToxicGasData.sensorName,
                sensorValue: mqToxicGasData.sensorValue,
            });
        if (mq135Data)
            liveData.push({
                sensorName: mq135Data.sensorName,
                sensorValue: mq135Data.sensorValue,
            });
        if (smokeData)
            liveData.push({
                sensorName: smokeData.sensorName,
                sensorValue: smokeData.sensorValue,
            });
        if (tempData)
            liveData.push({
                sensorName: tempData.sensorName,
                sensorValue: tempData.sensorValue,
            });

        res.status(200).json({
            liveData,
            success: true,
            message: "Live data fetched successfully!",
        });
    } catch (error) {
        console.error("Error fetching Live data:", error);
        res.status(500).json({ success: false, error: "Something went wrong!" });
    }
}

module.exports = { GetLiveData };
