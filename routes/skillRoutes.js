const { authJwt } = require('../middlewares');

const skill = require('../controllers/skillController.js');

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			'Access-Control-Allow-Headers',
			'x-access-token, Origin, Content-Type, Accept'
		);
		next();
	});
	// POST route that creates a post one authenticated
	app.post('/skill/create', [authJwt.verifyToken], skill.create);
	//   app.post("/post/create", posts.create);

	//FOR TESTING PURPOSES ONLY
	// GET route that returns single post with id
	// app.get("/skill/:id", [authJwt.verifyToken], skill.findOne);

	// // GET route that returns all posts
	app.get('/skill', skill.findAll);

	// // PUT route that updates a post
	// app.put("/skill/update/:id", [authJwt.verifyToken], skill.update);

	// // Route that deletes a post
	// app.delete("/skill/delete/:id", [authJwt.verifyToken], skill.delete);

	// // Route that deletes all posts
	// app.delete("/skill/delete_all", [authJwt.verifyToken], skill.deleteAll);
};
