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

//! Update de un usuario

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const newParams = req.body;
    const user = await userModel.findByIdAndUpdate(id, newParams, {
      new: true,
    });

    if (!user) return res.status(404).json({ status: "Success", user: user });

    res.status(200).json({ status: "Success", user: user });
  } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
  }
};

//! Borrar un usuario

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByIdAndDelete(id);
    if (!id) {
      return res
        .status(404)
        .json({ status: "Failed", error: "User not found" });
    }
    console.log("user", user);
    res.status(200).json({ status: "Success", user: user });
  } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
  }
};

//! Obtener mi perfil (por id)

const getMyProfile = async (req, res) => {
  try {
    const userId = req.payload._id;
    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ status: "Failed", error: "User not found" });
    }

    res.status(200).json({ status: "Success", user: user });
  } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
  }
};

module.exports = { getAllUsers, updateUser, deleteUser, getMyProfile };
