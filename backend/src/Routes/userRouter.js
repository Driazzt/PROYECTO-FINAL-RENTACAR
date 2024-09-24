const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/auth");
const verifyAdmin = require("../Middlewares/verifyAdmin");

//! Enrutados:

const {
  getAllUsers,
  getMyProfile,
  updateUser,
  deleteUser,
} = require("../Controllers/userController");

//! Rutas:

router.get("/getAllUsers", verifyToken, verifyAdmin, getAllUsers);
router.get("/:id", getMyProfile);
router.patch("/:id", verifyToken, verifyAdmin, updateUser);
router.delete("/:id", verifyToken, verifyAdmin, deleteUser);

module.exports = router;
