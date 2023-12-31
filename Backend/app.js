const express = require("express");
const app = express();
const errorMiddleware = require("./Middleware/error")

app.use(express.json());

//Route Imports
const product = require("./Routes/productRoute");

// Middleware for Errors
app.use(errorMiddleware);

app.use("/api/v1",product);

module.exports = app;