const express = require("express");
const bodyParser = require("body-parser");
const socketIo = require("socket.io");
const fs = require("fs");

const app = express();

const server = app.listen(8080);

const io = socketIo(server);

let count = 0;

io.on("connection", (socket) => {
  console.log("Connection triggered.");
  socket.on("counter", () => {
    console.log("counter socket event triggered");
    count++;
    io.emit("receiveCounter", count);
  });
});
