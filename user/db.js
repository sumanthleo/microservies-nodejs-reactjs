// import dotenv from "dotenv";
// dotenv.config();
const mongoose = require('mongoose')

const connection = async () => {
  try {
    const url = `mongodb+srv://sumanth_leo:suManth123@cluster0.i5ptkjl.mongodb.net/?retryWrites=true&w=majority`
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (error) {
    console.log("db error:" + error.message);
  }
};

module.exports = connection;