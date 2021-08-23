const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
const connectionDB = require('./database/db')


const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})