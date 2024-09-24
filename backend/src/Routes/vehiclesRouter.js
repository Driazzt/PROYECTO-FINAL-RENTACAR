const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/auth");
const verifyAdmin = require("../Middlewares/verifyAdmin");

//! Enrutados:

const {
  getAllVehicles,
  createVehicle,
  getVehiclesById,
  updateVehiclesById,
  deleteVehiclesById,
} = require("../Controllers/vehiclesController");

//! Rutas:

router.get("/", getAllVehicles);
router.post("/createVehicle", createVehicle);
router.get("/:idVehicle", getVehiclesById);
router.patch("/:idVehicle", updateVehiclesById);
router.delete("/:idVehicle", deleteVehiclesById);

module.exports = router;
