const express = require("express");
const { getAllProducts } = require("../Controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);

module.exports = router;