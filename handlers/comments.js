const model = require("../model/comments");

function postComment(req, res, next) {
  const newComment = req.body;
  model
    .addComment({ ...newComment, user_id: req.user.id })
    .then((comments) => {
      res.status(200).send(comments);
    })
    .catch(next);
}

function delComment(req, res, next) {
  const id = req.params.id;
  const currentUserId = req.user.id;
  model
    .delComment(id, currentUserId)
    .then(() => {
      res.status(200).send({});
    })
    .catch(next);
}

function getComments(req, res, next) {
  const post_id = req.params.id;
  model
    .getComments(post_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(next);
}
function updateComment(req, res, next) {
  const id = req.params.id;
  const newComment = req.body.comment;
  const currentUserId = req.user.id;

  model
    .updateComment(id, newComment, currentUserId)
    .then((data) => {
      console.log(1);
      res.status(200).send(data);
    })
    .catch(next);
}

module.exports = {
  getComments,
  postComment,
  delComment,
  updateComment,
};
