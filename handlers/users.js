const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const model = require("../model/users");
const bcrypt = require("bcryptjs");

dotenv.config();
const SECRET = process.env.JWT_SECRET;

function getAll(req, res, next) {
  model
    .getAllUser()
    .then((user) => {
      res.send(user);
    })
    .catch(next);
}

function get(req, res, next) {
  const id = req.params.id;
  model
    .getUserById(id)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
}

function postUsers(req, res, next) {
  const userData = req.body;
  const hashPass = req.body.pass;
  console.log(userData);

  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(hashPass, salt))
    .then((hash) => {
      userData.pass = hash;
      model
        .createUser(userData)
        .then((user) => {
          const token = jwt.sign({ user: user.id }, SECRET, {
            expiresIn: "1h",
          });
          const response = {
            username: user.username,
            pass: hash,
            email: user.email,
            gender: user.gender,
            age: user.age,
            currentloc: user.loc,
            moveto: user.moveto,
            university: user.university,
            price: user.price,
            roommatesnum: user.roommatesnum,
            studying: user.studing,
            pic: user.pic,
            access_token: token,
          };
          res.status(201).send(response);
        })
        .catch(next);
    });
}

function login(req, res, next) {
  const email = req.body.email;
  const password = req.body.pass;

  model
    .getUserByEmail(email)
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.pass).then((match) => {
          if (!match) {
            const error = new Error("Incorrect Password");
            status = 404;
            next(error);
            // if (password !== user.pass) {
            //   const error = new Error("Incorrect Password");
            //   status = 404;
            //   next(error);
          } else {
            const token = jwt.sign({ user: user.id }, SECRET, {
              expiresIn: "1h",
            });
            res.status(200).send({ access_token: token, user: user.username });
          }
        });
      } else {
        const error = new Error("no user Found");
        error.status = 404;
        next(error);
      }
    })
    .catch(next);
}

function putUser(req, res, next) {
  const userId = req.params.id;
  const newUser = req.body;
  model
    .updateUser(userId, newUser)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(next);
}

function updateMyProfile(req, res, next) {
  const token = req.headers.authorization;
  const userId = jwt.verify(token, SECRET);
  const newUser = req.body.myprofile;
  // const hashPass = req.body.myprofile.pass;
  // model.getUserById(userId.user).then((user) => {
  // if (!bcrypt.compare(hashPass, user.pass)) {
  console.log("reqqq:", req.body);
  // const hashPass = "123123";
  // bcrypt
  //   .genSalt(10)
  //   .then((salt) => bcrypt.hash(hashPass, salt))
  //   .then((hash) => {
  //     console.log("here");
  //     newUser.pass = hash;

  model
    .updateUser(userId.user, newUser)
    .then((user) => {
      res.status(200).send(user);
    })
    // })
    .catch(next);
  // });
}

function getUserByToken(req, res, next) {
  const token = req.headers.authorization;
  const userID = jwt.verify(token, SECRET);
  model
    .getUserById(userID.user)
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        const error = new Error("no user Found");
        error.status = 404;
        next(error);
      }
    })
    .catch(next);
}
function getTraits(req, res, next) {
  console.log("ggg");
  const id = req.params.id;
  model
    .getUserTraits(id)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
}
function delTrait(req, res, next) {
  const id = req.params.id;
  model
    .delTrait(id)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
}
function postTraits(req, res, next) {
  const userId = req.body.user_id;
  const newTrait = req.body.trait;

  model
    .postUserTraits(newTrait, userId)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
}

module.exports = {
  get,
  getAll,
  postUsers,
  login,
  putUser,
  getUserByToken,
  getTraits,
  delTrait,
  updateMyProfile,
  postTraits,
};
