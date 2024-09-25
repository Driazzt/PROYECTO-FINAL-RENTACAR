const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");

//! Obtener todos los usuarios.

const getAllUsers = async (req, res) => {
  try {
    const user = await userModel.find();

    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

//! Añadir un usuario

const addUser = async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    const newUser = new userModel({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: password,
      birth_date: req.body.birth_date,
      role: req.body.role,
    });
    await newUser.save();
    res.status(200).json({ status: "Success", newUser: newUser });
  } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
  }
};

//! Update de un usuario

const updateUser = async (req, res) => {
  try {
    const { idUser } = req.params;
    const newParams = req.body;
    if (newParams.password) {
      newParams.password = await bcrypt.hash(req.body.password, 12);
    }
    const user = await userModel.findByIdAndUpdate(idUser, newParams, {
      new: true,
    });
    //const password = await bcrypt.hash(req.body.password, 12);
    // if newParams --> hasheo contraseña
    if (!user) return res.status(404).json({ status: "Success", user: user });

    res.status(200).json({ status: "Success", user: user });
  } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
  }
};

//! Borrar un usuario

const deleteUser = async (req, res) => {
  try {
    const { idUser } = req.params;
    const user = await userModel.findByIdAndDelete(idUser);
    if (!idUser) {
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

const getUserById = async (req, res) => {
  try {
    const _id = req.params._id;
    console.log("userId", _id);
    console.log(typeof _id);
    if (!_id) {
      return res.status(404).json({ status: "Failed", error: "Id not valid" });
    }
    const user = await userModel.findById(_id);
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

module.exports = { getAllUsers, updateUser, deleteUser, getUserById, addUser };
