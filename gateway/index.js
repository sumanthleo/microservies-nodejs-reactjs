const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/' , (req , res) => {
    res.json("hello from gateway")
})
app.use('/users' , proxy('https://microservices-products.onrender.com'))
app.use('/products' , proxy('https://microservices-products.onrender.com'))
// app.use('/admin' , proxy('http://localhost:5000'))


app.listen(8000 , () => {
    console.log(`server is running on 8000`)
})



