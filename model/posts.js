const path = require("path");
const db = require(path.join(__dirname, "..", "database", "connection"));

function addPostmodel(newPost) {
  const postEntry = [newPost.post, newPost.user_id];

  return db
    .query(`INSERT INTO posts (post,user_id) VALUES ($1,$2)`, postEntry)
    .then((result) => {
      return result.rows;
    });
}
function delPostmodel(delPostId) {
  console.log(delPostId);
  return db
    .query(`DELETE FROM posts WHERE id =$1`, [delPostId])
    .then((result) => {
      return result;
    });
}

function delPostComments(delPostId) {
  return db
    .query(`DELETE FROM comments WHERE post_id =$1`, [delPostId])
    .then((result) => {
      return result;
    });
}

function getallpostsmodel() {
  return db
    .query(
      `SELECT * , posts.id
      FROM posts
      INNER JOIN users
      ON posts.user_id = users.id;`
    )
    .then((result) => {
      console.log(result);
      return result.rows;
    });
}

function updatePostModel(newPost, updatePostId) {
  return db
    .query(`UPDATE  posts set post = $1 where id =$2`, [newPost, updatePostId])
    .then((result) => {
      return result;
    });
}

module.exports = {
  addPostmodel,
  delPostmodel,
  delPostComments,
  getallpostsmodel,

  updatePostModel,
};
