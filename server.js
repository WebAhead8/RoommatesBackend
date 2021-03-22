const express = require("express");
const server = express();
const comments = require("./handlers/comments");
const posts = require("./handlers/postsHandler");
const cors = require("cors");
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>haneen10</h1>");
});
server.get("/allposts", (req, res) => {
  res.send("<h1>allposts</h1>");
});
server.get("/myporfile", (req, res) => {
  res.send("<h1>myporfile</h1>");
});
server.get("/allprofiles", (req, res) => {
  res.send("<h1>allprofiles</h1>");
});

server.get("/aboutus", (req, res) => {
  res.send("<h1>aboutus</h1>");
});
server.get("/signup", (req, res) => {
  res.send("<h1>signup</h1>");
});

server.get("/signup2", (req, res) => {
  res.send("<h1>signup2</h1>");
});
server.get("/login", (req, res) => {
  res.send("<h1>login</h1>");
});

server.get("/chat", (req, res) => {
  res.send("<h1>chat</h1>");
});
server.get("/findroommates", (req, res) => {
  res.send("<h1>findroommates</h1>");
});

server.listen(3000, () =>
  console.log("Server listening on http:localhost:3000")
);

// Comments Requests
server.post("/comment", comments.postComment); //add auth
server.delete("/comment/:id", comments.delComment);
server.get("/comments/:id", comments.getComments);
server.put("/comment/:id", comments.updateComment); //add auth

// Posts Requests
server.post("/post", posts.addPostHandler); //add auth
