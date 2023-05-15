const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Admin = require("./models/admin-model");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const getAdmins = await Admin.find()
    res.status(200).json(getAdmins)
  } catch (error) {
    console.log(error.message)
  }
});

app.post("/create", async (req, res) => {
  const newAdmin = new Admin(req.body);
  try {
    const savedProduct = await newAdmin.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    console.log(error.message);
  }
});

const url = `mongodb+srv://sumanth_leo:suManth123@cluster0.h6su0gn.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`db is connected`);
  })
  .catch(() => {
    console.log("error in db");
  });

app.listen(5000, () => {
  console.log(`server is running on 5000`);
});
