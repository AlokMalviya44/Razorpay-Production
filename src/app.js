const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.routes");

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoutes);
app.use('/create/orderId', indexRoutes);
app.use('/api/payment/verify', indexRoutes)

module.exports = app;
