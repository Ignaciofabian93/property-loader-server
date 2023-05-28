const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `database connected at: ${connect.connection.host}`.blue.underline
    );
  } catch (error) {
    console.log("error with database: ", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
