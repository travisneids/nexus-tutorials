const express = require("express");
const router = express.Router();
const purchaseController = require("../controllers/purchaseController");
const { verifyToken } = require("../middlewares/authMiddleware");
const { route } = require("./auth");

router.get(
  "/purchase-completed",
  verifyToken,
  purchaseController.purchaseCompleted
);

module.exports = router;
