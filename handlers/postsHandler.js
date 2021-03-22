const model = require("../model/posts");

function addPostHandler(req, res, next) {
  const newPost = req.body;
  console.log("handler ", req.body);
  model
    .addPostmodel(newPost)
    .then((newPost) => {
      res.status(201).send(newPost);
    })
    .catch(next);
}

module.exports = {
  addPostHandler,
};
