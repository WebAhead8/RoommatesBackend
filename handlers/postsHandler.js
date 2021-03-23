const model = require("../model/posts");

function addPostHandler(req, res, next) {
  const newPost = req.body;

  model
    .addPostmodel(newPost)
    .then((newPost) => {
      res.status(201).send(newPost);
    })
    .catch(next);
}

function delPostHandler(req, res, next) {
  const delPostId = req.params.id; //take id frome the frontend
  model
    .delPostmodel(delPostId)
    .then(() => {
      res.status(201).send();
    })
    .catch(next);
}

module.exports = {
  addPostHandler,
  delPostHandler,
};
