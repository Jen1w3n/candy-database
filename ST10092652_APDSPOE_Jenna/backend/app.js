// https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const urlprefix = '/api'
const mongoose = require('mongoose')
const Candy = require('./models/candy')
const fs = require('fs')
const cert = fs.readFileSync('keys/certificate.pem'); //checks .pem files for secure connection
const options = {
    server: { sslCA: cert }}; //checks cert const
const connstring = 'mongodb+srv://jennadebeer:UAgOeCQgMCQEOnd1@cluster1.45zrsbw.mongodb.net/CandyDB?retryWrites=true&w=majority'

const candyRoutes = require("./routes/candy");
const userRoutes = require('./routes/user')

mongoose.connect(connstring)
.then(()=>
{
    console.log('Connected :)')
})
.catch((err)=>
{
    console.error('Error connecting to MongoDB: ',err) //Check that IP is connected on MongoDB cluster
}, options); //calls options const

app.use(express.json())
app.use((reg,res,next)=>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods','*');
    next();
});

// https://expressjs.com/en/4x/api.html#app.get
app.get(urlprefix+'/', (req, res) => {
    res.send('Hello World')
})

app.use(urlprefix+'/candies', candyRoutes)
app.use(urlprefix+'/users',userRoutes)

module.exports = app;