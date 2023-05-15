const express = require('express')
const mongoose = require('mongoose')
const { Signup, Login } = require('./src/controller/user-controller')
const connection = require('./db')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: '*' }));

app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );
  

app.get('/' , (req,res) => {
    res.json("hello from users")
})
app.post("/signup", Signup);
app.post("/login", Login);

connection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(8001 , () => {
    console.log(`users server is running on 8001`)
})