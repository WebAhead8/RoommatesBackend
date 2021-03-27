const express = require("express");
const users = require("./handlers/users");
const comments = require("./handlers/comments");
const posts = require("./handlers/postsHandler");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const auth = require("./middleware/auth");

const server = express();
server.use(express.json());
server.use(cors());

// server.get("/", (req, res) => {
//   res.send("<h1>haneen10</h1>");}
// // });
// //
// server.get("/myporfile", (req, res) => {
//   res.send("<h1>myporfile</h1>");
// });
// server.get("/allprofiles", (req, res) => {
//   res.send("<h1>allprofiles</h1>");
// });

// server.get("/aboutus", (req, res) => {
//   res.send("<h1>aboutus</h1>");
// });

// server.get("/chat", (req, res) => {
//   res.send("<h1>chat</h1>");
// });
// server.get("/findroommates", (req, res) => {
//   res.send("<h1>findroommates</h1>");
// });

server.listen(4000, () =>
  console.log("Server listening on http:localhost:4000")
);

// Comments Requests
server.post("/comment", auth, comments.postComment); //add auth
server.delete("/comment/:id", auth, comments.delComment);
server.get("/comments/:id", comments.getComments);
server.put("/comment/:id", auth, comments.updateComment); //add auth

// Posts Requests /posts here is the DB table
server.post("/post", auth, posts.addPostHandler); //add auth
server.delete("/post/:id", auth, posts.delPostHandler); //add auth
server.put("/post/:id", auth, posts.updatePostHandler); //add auth
server.get("/allposts", posts.getAllPostsHandler); //add auth

//users Request
server.post("/login", users.login);
server.get("/users/", users.getAll);
server.get("/users/:id", users.get); //user's profile don't use it!!!!!!!!!!!!!!!!!
server.post("/users", users.postUsers);
server.put("/users/:id", users.putUser);
// server.get("/myprofile", auth, users.get);
server.get("/myprofile", users.getUserByToken);
server.put("/mynewprofile", users.updateMyProfile);

//traits Requests
server.get("/traits/:id", users.getTraits);
server.delete("/trait/:id", users.delTrait);
server.use(errorHandler);
