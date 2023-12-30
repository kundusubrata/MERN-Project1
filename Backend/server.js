const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./Config/database");

// config
dotenv.config({path:"Backend/Config/config.env"});
// Connecting Database
connectDatabase();

app.listen(process.env.PORT,() => {
    console.log(`Server is Working on http://localhost:${process.env.PORT}`);
})