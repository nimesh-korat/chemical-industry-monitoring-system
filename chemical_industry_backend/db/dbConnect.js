const { MongoClient } = require("mongodb");

const connectDB = async () => {
  const dbUrl =
    process.eve.MONGODB_URI;
  try {
    const client = await MongoClient.connect(dbUrl);
    console.log("DB Connected");
    return client.db(); // Return the db object for further usage
  } catch (error) {
    console.log("DB connection Error: ", error);
    throw error;
  }
};
module.exports = connectDB;
