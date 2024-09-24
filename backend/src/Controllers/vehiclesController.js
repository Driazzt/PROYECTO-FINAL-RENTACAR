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

//! Crear un vehiculo

const createVehicle = async (req, res) => {
  try {
    const {
      brand,
      model,
      engine_type,
      transmission,
      seats,
      doors,
      vehicle_type,
      registration_year,
      price_per_day,
      image,
    } = req.body;
    const vehicles = await vehiclesModel.create({
      brand,
      model,
      engine_type,
      transmission,
      seats,
      doors,
      vehicle_type,
      registration_year,
      price_per_day,
      image,
    });

    res.status(200).json({ status: "Success", vehicles: vehicles });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

//! vehicles por id

const getVehiclesById = async (req, res) => {
  try {
    const { idVehicle } = req.params;
    const vehicleById = await vehiclesModel.findById(idVehicle);

    if (!vehicleById)
      return res
        .status(404)
        .json({ status: "Failed", error: "Can not find the vehicle" });

    res.status(200).json({ status: "Success", vehicles: vehicleById });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

//! updatevehicles por id

const updateVehiclesById = async (req, res) => {
  try {
    const { idVehicle } = req.params;
    const update = req.body;

    const updateVehicle = await vehiclesModel.findByIdAndUpdate(
      idVehicle,
      update,
      {
        new: true,
      }
    );
    res.status(200).json({ status: "Success", vehicles: updateVehicle });
  } catch {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

//! deletevehicles por id

const deleteVehiclesById = async (req, res) => {
  try {
    const { idVehicle } = req.params;
    const deleteVehicle = await vehiclesModel.findByIdAndDelete(idVehicle);

    if (!deleteVehicle)
      return res(404).json({
        status: "Failed",
        error: "Vehicle does not exist",
      });
    res.status(200).json({ status: "Success", vehicles: deleteVehicle });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

//! Importaciones:

module.exports = {
  getAllVehicles,
  createVehicle,
  getVehiclesById,
  updateVehiclesById,
  deleteVehiclesById,
};
