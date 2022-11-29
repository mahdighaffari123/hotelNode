const express = require("express");
const router = express.Router();
const authController = require("./controller/controller");

router.post("/register", authController.register);

module.exports = router;
