const dbConfig = require("../data/omniconnx-db.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./userModel.js")(mongoose);
db.posts = require("./postModel.js")(mongoose);

module.exports = db;