const db = require("../models");
const User = db.users;

//Function that checks that the email is not already in the database
//You will see this function called in the signup route
function checkDuplicateUsernameOrEmail (req, res, next){
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      // res.status(400).send({ message: "Username already exists" });
      res.send({ message: "Failed! Username is already in use!" });
      return;
    }
    next();
  });
};
const verifySignUp = {
  checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;