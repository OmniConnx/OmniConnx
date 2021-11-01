module.exports = app => {
    const posts = require("../controllers/postController.js");
    const auth = require("../middleware/auth")
    var router = require("express").Router();
  
//   // Create a new post
//   //For auth
//   //  router.post("/create", auth, posts.create);
//   router.post("/create", posts.create);

//   // // Update a user with id
//   router.put("/update/:id", posts.update);

//   // // Delete a user with id
//   router.delete("/delete/:id", posts.delete);
 

// // FOR TESTING PURPOSES ONLY
//   // Retrieve all posts
//   //router.get("/", auth, posts.findAll);
//   router.get("/", posts.findAll);
//   // // Retrieve a single user with id
//   router.get("/:id", posts.findOne);
 
//   // // delete all users
//   router.delete("/delete_all", posts.deleteAll);

//   app.use('/post', router);
};