const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({
  path: ".env",
});

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

server.listen(PORT, function () {
  console.log("Server listening on port " + PORT);
});

process.on("uncaughtException", () => {
  process.exit(1);
});

process.on("unhandledRejection", () => {
  process.exit(0);
});
