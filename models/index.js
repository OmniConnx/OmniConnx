const dbConfig = require("../data/omniconnx-db.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('debug', false);

const db = {};
db.mongoose = mongoose;

db.url = dbConfig.url;
db.users = require("./userModel.js")(mongoose);
db.posts = require("./postModel.js")(mongoose);
db.skills = require('./skillModel')(mongoose);

module.exports = db;