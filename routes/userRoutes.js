module.exports = app => {
  const users = require("../controllers/userController.js");
  var router = require("express").Router();
  
  // Create a new user
  //router.post("/signup", users.signup);
  router.post("/signup", users.create);

  // Login a user
  //router.post("/login", users.login);

  // Logout a user
  //router.get("/logout", users.logout);


  // FOR TESTING PURPOSES ONLY
  // // Retrieve all users
  router.get("/", users.findAll);

  // // Retrieve a single user with id
  //router.get("/:id", users.findOne);

  // // Update a user with id
  router.put("/update/:id", users.update);

  // // Delete a user with id
  router.delete("/delete/:id", users.delete);

  // // delete all users
  router.delete("/delete_all", users.deleteAll);

  app.use('/user', router);
};
    