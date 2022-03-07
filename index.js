const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./DB/config");

const app = express();

dbConnection()

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log(`servidor corriendop en el puerto ${process.env.PORT}`);
});
