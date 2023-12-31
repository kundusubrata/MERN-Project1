const ErrorHandler = require("../Utils/errorhandler");

module.exports = (err,req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    // Wrong Mongodb Id error
    if(err.name === "CastError"){
        const message = `Product not found. Invalid${err.path}`;
        err = new ErrorHandler(message,400);
    }


    res.status(err. statusCode).json({
        success: false,
        error: err.message,
        // error: err.stack,
    })
}