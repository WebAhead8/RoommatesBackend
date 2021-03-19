const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Hiiidfftgtgsdcdcsdfrfctgbgbdii</h1>");
});
server.get("/aboutus", (req, res) => {
  res.send("<h1>Hiedetgsdcdcffsdfrfctgbgbdii</h1>");
});

server.listen(3000, () =>
  console.log("Server listening on http:localhost:3000")
);
