const express = require("express");
const users = require("./handlers/users");
const comments = require("./handlers/comments");
const posts = require("./handlers/postsHandler");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const auth = require("./middleware/auth");

const server = express();
server.use(express.json());
server.use(errorHandler);
server.use(cors());

server.get("/", (req, res) => {
  res.send("<h1>haneen10</h1>");
});
//
server.get("/myporfile", (req, res) => {
  res.send("<h1>myporfile</h1>");
});
server.get("/allprofiles", (req, res) => {
  res.send("<h1>allprofiles</h1>");
});

server.get("/aboutus", (req, res) => {
  res.send("<h1>aboutus</h1>");
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
server.post("/comment", auth, comments.postComment); //add auth
server.delete("/comment/:id", auth, comments.delComment);
server.get("/comments/:id", comments.getComments);
server.put("/comment/:id", auth, comments.updateComment); //add auth

// Posts Requests /posts here is the DB table
server.post("/post", posts.addPostHandler); //add auth
server.delete("/post/:id", posts.delPostHandler); //add auth
server.put("/post/:id", posts.updatePostHandler); //add auth
server.get("/allposts", posts.getAllPostsHandler); //add auth

server.post("/login", users.login);
server.get("/users/", users.getAll);
server.get("/users/:id", users.get);
server.post("/users", users.postUsers);
