const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const vechiclesSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  engine_type: {
    type: String,
    required: true,
    enum: ["Gasoline", "Diesel", "Hybrid"],
  },
  transmission: {
    type: String,
    required: true,
    enum: ["Manual", "Automatic"],
  },
  seats: {
    type: Number,
    required: true,
  },
  doors: {
    type: Number,
    required: true,
  },
  vehicle_type: {
    type: String,
    required: true,
    enum: ["Hatchback", "SUV", "Sedan", "Cabrio", "Van"],
  },
  registration_year: {
    type: Number,
    required: true,
  },
  price_per_day: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

const vehiclesModel = mongoose.model("Vehicles", vechiclesSchema, "vehicles");

module.exports = vehiclesModel;
