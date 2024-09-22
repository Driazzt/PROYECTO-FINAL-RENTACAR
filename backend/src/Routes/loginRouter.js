const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/auth");

const {
  signup,
  login,
  getRefreshToken,
} = require("../Controllers/loginController");

//! Rutas:

router.post("/signup", signup);
router.post("/login", login);
router.get("/getRefreshToken", verifyToken, getRefreshToken);

module.exports = router;
