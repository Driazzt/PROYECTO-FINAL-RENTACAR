const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/auth");
const verifyAdmin = require("../Middlewares/verifyAdmin");

//! Enrutados:

const {
  getAllUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../Controllers/userController");

//! Rutas:

router.get("/getAllUsers", verifyToken, verifyAdmin, getAllUsers);
router.post("/", verifyToken, verifyAdmin, addUser);
router.get("/:_id", verifyToken, getUserById);
router.patch("/:idUser", verifyToken, verifyAdmin, updateUser);
router.delete("/:idUser", verifyToken, verifyAdmin, deleteUser);

module.exports = router;
