const express = require("express");
const router = express.Router();
const creatorProgramController = require("../controllers/creatorProgramController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.get(
  "/validate-code/:code",
  verifyToken,
  creatorProgramController.validateCode
);

module.exports = router;
