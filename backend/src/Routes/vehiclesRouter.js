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
router.post("/createVehicle", verifyToken, verifyAdmin, createVehicle);
router.get("/:idVehicle", getVehiclesById);
router.patch("/:idVehicle", verifyToken, verifyAdmin, updateVehiclesById);
router.delete("/:idVehicle", verifyToken, verifyAdmin, deleteVehiclesById);

module.exports = router;
