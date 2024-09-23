const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const generateToken = require("../Utils/generateToken");

//! EndPoints

//! Registro de usuario.

const signup = async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, 12);
    const user = new userModel({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: password,
      birth_date: req.body.birth_date,
      role: req.body.role,
    });
    await user.save();

    // introducir EMAIL TEMPLATE

    res.status(201).json({ status: "Success", users: users });
  } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
  }
};

//! Logeo de usuario

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res
        .status(401)
        .json({ status: "Failed", message: "Email and password do not match" });
    }
    const correctPassword = await user.correctPassword(password);
    if (!correctPassword) {
      return res
        .status(401)
        .json({ status: "Failed", message: "Email and password do not match" });
    }

    const payload = {
      userId: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      birth_date: user.birth_date,
      role: user.role,
    };

    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);

    res
      .status(201)
      .json({ status: "Success", user: user, token, token_refresh });
  } catch (error) {
    return res.status(404).json({ status: "Failed", error: error.message });
  }
};

//! Generar el token y token de refresco

const getRefreshToken = async (req, res) => {
  try {
    if (!req.payload) {
      return res
        .status(400)
        .json({ status: "Faled", message: "Access Denied" });
    }
    const payload = {
      userId: req.payload.userId,
      name: req.payload.name,
      username: req.payload.username,
      email: req.payload.email,
      birth_date: req.payload.birth_date,
      role: req.payload.role,
    };

    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);

    res.status(201).json({ status: "Success", token, token_refresh });
  } catch (error) {
    return res.status(404).json({ status: "Failed", error: error.message });
  }
};

module.exports = {
  signup,
  login,
  getRefreshToken,
};
