const { authJwt } = require("../middlewares");

const posts = require("../controllers/postController.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // POST route that creates a post one authenticated 
//   app.post("/post/create",[authJwt.verifyToken], posts.create);
  app.post("/post/create", [authJwt.verifyToken], posts.create);
  //FOR TESTING PURPOSES ONLY
  // GET route that returns single post with id
  app.get("/post/:id", [authJwt.verifyToken], posts.findOne);

  // GET route that returns all posts
  app.get("/post", [authJwt.verifyToken], posts.findAll);

  // PUT route that updates a post
  app.put("/post/update/:id", [authJwt.verifyToken], posts.update);

  // Route that deletes a post 
  app.delete("/post/delete/:id", [authJwt.verifyToken], posts.delete);

  // Route that deletes all posts
  app.delete("/post/delete_all", [authJwt.verifyToken], posts.deleteAll);
};
    