const db = require("../models");
const User = db.user;

function checkDuplicateUsernameOrEmail (req, res, next){
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
  });
};

module.exports = checkDuplicateUsernameOrEmail;