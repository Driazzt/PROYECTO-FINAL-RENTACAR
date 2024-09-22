const express = require("express");
const router = express.Router();

//! Enrutados:

const { getAllVehicles } = require("../Controllers/vehiclesController");

//! Rutas:

router.get("/", getAllVehicles);

module.exports = router;
