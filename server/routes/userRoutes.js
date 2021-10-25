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
  // POST route that creates a new user 
  app.post("/user/signup", users.signup, function(req, res){
    checkDuplicateUsernameOrEmail
  });

  // POST route that logs in a user
  app.post("/user/signin", users.signin);

  // GET route that returns all users
  app.get("/user", users.findAll);

  // PUT route that updates a user
  app.put("/user/update/:id", users.update);

  // Route that deletes a user 
  app.delete("/user/delete/:id", users.delete);

  // Route that deletes all users
  app.delete("/user/delete_all", users.deleteAll);
};
    

