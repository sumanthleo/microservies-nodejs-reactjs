const express = require('express')
const mongoose = require('mongoose')
 const { createProduct, getProducts , getAllProducts } = require('./src/controller/product-controller')
const connection = require('./db')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );
app.post("/create", createProduct);
app.get("/:id", getProducts);
app.get('/' , getAllProducts)

connection();
app.listen(8002 , () => {
    console.log(`Products server is running on 8002`)
})