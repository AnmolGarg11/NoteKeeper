//Connection file to mongo db

require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    });

    //console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    //console.error(`Error: ${error.message}`);
    process.exit();
  }
};

//export default connectDB;
module.exports = connectDB;
