const express = require("express");
const userRouter = require("./routes/userRoutes");
const iceCreamRouter = require("./routes/iceCreamRoutes");

const app = express();

app.use("/icecreams", iceCreamRouter);
app.use("/users", userRouter);

module.exports = app;
