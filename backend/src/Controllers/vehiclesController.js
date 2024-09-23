const vehiclesModel = require("../Models/vehiclesModel");

//! Endpoints:

//! Obtener todos los vehiculos:

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await vehiclesModel.find();

    res.status(200).json({ vehicles: vehicles });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

//! Importaciones:

module.exports = { getAllVehicles };
