const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/auth");
const verifyAdmin = require("../Middlewares/verifyAdmin");

//! Enrutados:

const { getAllVehicles } = require("../Controllers/vehiclesController");

//! Rutas:

router.get("/", getAllVehicles);

module.exports = router;
