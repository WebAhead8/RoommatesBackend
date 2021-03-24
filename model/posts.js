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

module.exports = {
  addPostmodel,
};
