const express =  require("express");
const { registerUser } = require("../Controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);   
module.exports = router;