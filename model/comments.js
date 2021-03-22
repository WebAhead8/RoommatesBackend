const path = require("path");
const db = require(path.join(__dirname, "..", "database", "connection"));

function addComment(newComment) {
  const comentEntry = [
    newComment.comment,
    newComment.user_id,
    newComment.post_id,
  ];
  console.log("newComment: ", newComment);
  return db
    .query(
      `INSERT INTO comments (comment,user_id,post_id) VALUES ($1,$2,$3)`,
      comentEntry
    )
    .then((result) => {
      return result.rows;
    });
}

function delComment(id) {
  return db
    .query(`DELETE FROM comments WHERE id = ($1)`, [id])
    .then((result) => {
      return result;
    });
}

function getComments(post_id) {
  return db
    .query(
      `SELECT post_id,user_id,username,comment 
    FROM comments
    INNER JOIN users ON comments.user_id = users.id
     WHERE post_id = ($1)`,
      [post_id]
    )
    .then((result) => {
      return result.rows;
    });
}
function updateComment(id, newComment) {
  const values = [id, newComment];
  return db
    .query(`UPDATE comments SET comment = $2 WHERE id =$1`, values)
    .then((result) => {
      return result.rows;
    });
}

module.exports = {
  addComment,
  delComment,
  getComments,
  updateComment,
};