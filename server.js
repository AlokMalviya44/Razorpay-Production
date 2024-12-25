// Description: This file is the entry point of the application. It creates a server and listens on port 3000.
require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/db");
connectDB();

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
