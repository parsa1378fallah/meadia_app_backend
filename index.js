

const express = require('express');
const app  = express();


const Router = require('./src/routes')

const mongoose = require('mongoose');
const config = require('config');
const debug = require('debug')("app:main");
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{debug("connected to database")})
.catch(()=>{debug("could not connect")})

app.use('/api' , Router)

const PORT  = process.env.PORT || 3000 ; 

app.listen(PORT , ()=>{console.log(`lestening to port ${PORT}`)})

require("dotenv").config()




// "address" : "mongodb://127.0.0.1:27017/socialMediaProject"