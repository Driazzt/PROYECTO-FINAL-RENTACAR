const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { differenceInYears } = require("date-fns");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    //TODO: VALIDACIONES!!
    type: String,
    required: true,
    unique: true,
  },
  password: {
    //TODO: ENCRIPTACIONES +  VALIDACIONES!!
    type: String,
    required: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

userSchema.methods.correctPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.calculeAge = function () {
  const today = new Date();
  return differenceInYears(today, new Date(this.birth_date));
};

const userModel = mongoose.model("Users", userSchema, "users");

module.exports = userModel;
