const express = require("express");
const app = express();
const errorMiddleware = require("./Middleware/error")

app.use(express.json());

//Route Imports
const product = require("./Routes/productRoute");
const user = require("./Routes/userRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);

// Middleware for Errors
app.use(errorMiddleware);


module.exports = app;