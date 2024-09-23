const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/auth");
const verifyAdmin = require("../Middlewares/verifyAdmin");

//! Enrutados:

const { getAllUsers } = require("../Controllers/userController");

//! Rutas:

router.get("/getAllUsers", getAllUsers);

module.exports = router;
