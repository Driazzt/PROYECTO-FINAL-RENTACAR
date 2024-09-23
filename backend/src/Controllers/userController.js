const userModel = require("../Models/userModel");

//! Obtener todos los usuarios.

const getAllUsers = async (req, res) => {
  try {
    const user = await userModel.find();

    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

module.exports = { getAllUsers };
