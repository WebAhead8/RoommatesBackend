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

function delComment(id, currentUserId) {
  return db
    .query(`SELECT user_id FROM comments WHERE id = ($1)`, [id])
    .then((result) => {
      // console.log("reslttt:", result.rows[0].user_id);
      // console.log("currrent:", currentUserId);
      if (result.rows[0].user_id !== currentUserId) {
        throw new Error("You can't delete");
      } else {
        db.query(`DELETE FROM comments WHERE id = ($1)`, [id]).then(
          (result) => {
            return result;
          }
        );
      }
      return result;
    });
  // return db
  //   .query(`DELETE FROM comments WHERE id = ($1)`, [id])
  //   .then((result) => {
  //     return result;
  //   });
}

function getComments(post_id) {
  return db
    .query(
      `SELECT post_id,user_id,username,comment , comments.id
    FROM comments
    INNER JOIN users ON comments.user_id = users.id
     WHERE post_id = ($1)`,
      [post_id]
    )
    .then((result) => {
      return result.rows;
    });
}
function updateComment(id, newComment, currentUserId) {
  const values = [id, newComment];
  return db
    .query(`SELECT user_id FROM comments WHERE id = ($1)`, [id])
    .then((result) => {
      if (result.rows[0].user_id !== currentUserId) {
        throw new Error("You can't update");
      } else {
        return db
          .query(
            `UPDATE comments SET comment = $2 WHERE id =$1  returning *`,
            values
          )
          .then((data) => {
            console.log(data.rows[0]);
            return data.rows[0];
          });
      }
    });
}

module.exports = {
  addComment,
  delComment,
  getComments,
  updateComment,
};
