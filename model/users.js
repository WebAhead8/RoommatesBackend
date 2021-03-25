const db = require("../Database/connection");

function getAllUser() {
  return db.query("select * from users").then((data) => {
    if (!data.rows.length)
      throw new Error(`No user with email '${email}' found`);
    return data.rows;
  });
}

function createUser(newUser) {
  const values = [
    newUser.username,
    newUser.pass,
    newUser.email,
    newUser.gender,
    newUser.age,
    newUser.currentloc,
    newUser.moveto,
    newUser.university,
    newUser.roommatesnum,
    newUser.studing,
    newUser.pic,
  ];
  return db
    .query(
      "INSERT INTO users(username, pass,email,gender,age,currentloc,moveto,university,roommatesnum,studying,pic) VALUES($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11)  returning *",
      values
    )
    .then((result) => {
      return result.rows;
    });
}
function getUserByEmail(email) {
  const values = [email];
  return db.query("select * from users where email=$1", values).then((data) => {
    if (!data.rows.length)
      throw new Error(`No user with email '${email}' found`);
    return data.rows[0];
  });
}
function getUserByUsername(username) {
  const values = [username];
  return db
    .query("select * from users where username=$1", values)
    .then((data) => {
      if (!data.rows.length)
        throw new Error(`No user with username '${username}' found`);
      return data.rows[0];
    });
}

function getUserById(id) {
  const values = [id];
  return db.query("select * from users where id=$1", values).then((data) => {
    if (!data.rows.length) throw new Error(`No user with id '${id}' found`);
    return data.rows[0];
  });
}
function updateUser(id, user) {
  const val = [
    user.username,
    user.pass,
    user.email,
    user.gender,
    user.age,
    user.currentloc,
    user.moveto,
    user.university,
    user.roommatesnum,
    user.studying,
    user.pic,
    id,
  ];
  console.log(val);
  return db
    .query(
      `UPDATE  users SET username=$1, pass=$2,email=$3,gender=$4,age=$5,currentloc=$6,moveto=$7,university=$8,roommatesnum=$9,studying=$10,pic=$11 where id=$12 returning *   `,
      val
    )

    .then((result) => {
      return result.rows;
    });
}
//   return {
//     db: query("select * from users where id=$1", values).then((data) => {
//       if (!data.rows.length) throw new Error(`No user with id '${id}' found`);
//       console.log(data);
//       return data.rows[0];
//     }),
//     db: query(`UPDATE  users set user = $1 where id =$2`, values),
//   };
// }
function getUserTraits(id) {
  const values = [id];
  return db
    .query("select * from users_traits where user_id=$1", values)
    .then((data) => {
      if (!data.rows.length) throw new Error(`No user with id '${id}' found`);
      return data.rows[0];
    });
}
function delTrait(id) {
  return db
    .query(`DELETE FROM users_traits WHERE id =$1`, [id])
    .then((result) => {
      return result;
    });
}
module.exports = {
  createUser,
  getUserByEmail,
  getUserByUsername,
  getUserById,
  updateUser,
  getAllUser,
  getUserTraits,
  delTrait,
};
