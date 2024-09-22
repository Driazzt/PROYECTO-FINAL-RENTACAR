//! Conexiones:

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//! Conexion con MongoDB, database dinámica.

const url_mongodb = process.env.DATA_URL_MONGO;
mongoose.connect(url_mongodb);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("Error en la conexión con Mongo");
});

db.on("connected", () => {
  console.log("Success connect");
});

db.on("disconnected", () => {
  console.log("Mongo is disconnected");
});

//! Importacion de rutas:

const loginRouter = require("./src/Routes/loginRouter");
const userRouter = require("./src/Routes/userRouter");
const vehiclesRouter = require("./src/Routes/vehiclesRouter");

//! Rutas:

app.use("/vehicles", vehiclesRouter);
app.use("/user", userRouter);
app.use("/login", loginRouter);

//! Puerto:

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
