const db = require("../Database/connection");

function getAllUser() {
  return db.query("select * from users").then((data) => {
    if (!data.rows.length)
      throw new Error(`No user with email '${email}' found`);
    return data.rows;
  });
}

function createUser(user) {
  const values = [user.username, user.pass, user.email,user.gender,user.age,user.currentloc,user.moveto,user.university,user.studing,user.pic];
  return db
    .query(
      "INSERT INTO users(user.username, user.pass, user.email,user.gender,user.age,user.currentloc,user.moveto,user.university,user.studing,user.pic) VALUES($1, $2, $3,$4,$5,$6,$7,$8,$9,$10)  returning *",
      values
    )
    .then((result) => {
      return result.rows;
    });
}
