const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrders,
  deleteOrders,
} = require("../Controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../Middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/me").get(isAuthenticatedUser, myOrders);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);
router.route("/admin/orders/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrders)
  .delete(isAuthenticatedUser, authorizeRoles("admin"),deleteOrders);

module.exports = router;
