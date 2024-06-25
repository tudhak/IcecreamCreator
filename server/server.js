const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = require("app");

dotenv.config({ path: "./.env" });

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let dbString = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD);
dbString = dbString.replace("<USERNAME>", process.env.DB_USERNAME);

mongoose
  .connect(dbString)
  .then(() => {
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Server running on Port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err.message));
