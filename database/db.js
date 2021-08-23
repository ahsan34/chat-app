const mongoose = require("mongoose")

const connectionDB =
mongoose.connect("mongodb://localhost:27017/chatAppDb",
{ useNewUrlParser: true, useUnifiedTopology: true}).then(
    result=>{
        console.log("Connection is succesfull with the database");
    }
).catch(
    err=>{
        console.log("Error in connecting database");
    }
)
module.exports = connectionDB