const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 8000;

io.on("connection", socket => {
  socket.broadcast.emit("arrive", "New user arrived!");

  socket.on("disconnect", () => io.emit("exit", "Some user left the chat"));

  socket.on("message", payload => {
    io.emit("message", payload);
  });
});

server.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});
