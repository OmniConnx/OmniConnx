const {verifyToken} = require("../middlewares/authJwt");
const {checkDuplicateUsernameOrEmail} = require("../middlewares/verifySignUp");
const users = require("../controllers/userController.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/user/register", users.signup, function(req, res){
    checkDuplicateUsernameOrEmail
  });

  app.post("/user/signin", users.signin);

  app.get("/user", users.findAll);

  app.put("/user/update/:id", users.update);

  // // Delete a user with id
  app.delete("/user/delete/:id", users.delete);

  // // delete all users
  app.delete("/user/delete_all", users.deleteAll);
};
    

