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
  const delPostId = req.params.id;
  model
    .delPostComments(delPostId)
    .then(() => {
      return model.delPostmodel(delPostId);
    })
    .then(() => {
      res.status(201).send();
    })
    .catch(next);
}
function getAllPostsHandler(req, res, next) {
  model

    .getallpostsmodel()
    .then((data) => {
      res.status(201).send(data);
    })

    .catch(next);
}

function updatePostHandler(req, res, next) {
  const updatePostId = req.params.id;
  const newPost = req.body.post;

  model
    .updatePostModel(newPost, updatePostId)
    .then(() => {
      res.status(201).send();
    })
    .catch(next);
}

module.exports = {
  addPostHandler,
  delPostHandler,
  getAllPostsHandler,
  updatePostHandler,
};
