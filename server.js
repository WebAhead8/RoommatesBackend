const express = require("express");
const users = require("./handlers/users");
const comments = require("./handlers/comments");
const posts = require("./handlers/postsHandler");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const auth = require("./middleware/auth");

const server = express();
server.use(cors());
server.use(express.json());

server.listen(
  4000,
  () => console.log("Server listening on http:localhost:4000")
  // Comments Requests
);

server.post("/comment", auth, comments.postComment); //add auth
server.delete("/comment/:id", auth, comments.delComment);
server.get("/comments/:id", comments.getComments);
server.put("/comment/:id", auth, comments.updateComment); //add auth

// Posts Requests /posts here is the DB table
server.post("/post", posts.addPostHandler); //add auth
server.delete("/post/:id", posts.delPostHandler); //add auth
server.put("/post/:id", posts.updatePostHandler); //add auth
server.get("/allposts", posts.getAllPostsHandler); //add auth

//users Request
server.post("/login", users.login);
server.get("/users", users.getAll);
server.get("/users/:id", users.get); //user's profile don't use it!!!!!!!!!!!!!!!!!
server.post("/users", users.postUsers);
server.put("/users/:id", users.putUser);
// server.get("/myprofile", auth, users.get);
server.get("/myprofile", users.getUserByToken);
server.put("/mynewprofile", users.updateMyProfile);

//traits Requests
server.get("/traits/:id", users.getTraits);
server.delete("/trait/:id", users.delTrait);
server.post("/traits", users.postTraits);

server.use(errorHandler);
server.listen(4000, () =>
  console.log("Server listening on http:localhost:4000")
);
