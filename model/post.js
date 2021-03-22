const path = require("path");
const db = require(path.join(__dirname, "..", "database", "connection"));

function addPost(postData) {
  const addPost = [postData.post, postData.user_id];
  return db
    .query(
      `INSERT INTO posts(post,user_id) VALUES ($1,$2,$3) returning *`,
      addPost
    )
    .then((result) => {
      return result.rows;
    });
}
