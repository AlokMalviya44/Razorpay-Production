const mongoose = require("mongoose");

const connectDB = function connect() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
}

module.exports = connectDB;