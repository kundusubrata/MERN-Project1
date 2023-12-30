const mongoose = require("mongoose");

const connectedDatabase = () =>{
    mongoose.connect(process.env.DB_URI,{}).then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch((err) => {
        console.log(err);
        console.log("Connection Failed");
    });
}


module.exports = connectedDatabase;