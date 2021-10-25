const db = require("../models");
const User = db.user;

//Function that checks that the email is not already in the database
//You will see this function called in the signup route
function checkDuplicateUsernameOrEmail (req, res){
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