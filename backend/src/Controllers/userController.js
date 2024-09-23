const userModel = require("../Models/userModel");

//! Obtener todos los usuarios.

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

module.exports = { getAllUsers };
