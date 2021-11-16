const db = require("../models");
const jwt = require('jsonwebtoken');
const Post = db.posts;
const User = db.users;

// exports.create = (req, res) => {
//     const post = new Post({
//       title: req.body.title,
//       content: req.body.content
//     });
//     post.save((err, post) => {
//       if (err) {
//         res.status(500).send({ message: err });
//       return;
//       } else {
//         res.send({ message: "Post was created!" });
//       }
//     });
//   };

// THIS COMMENTED CODE IS FOR AN UPDATED CONTROLLER OF CREATING A POST 
// WHERE THERE IS A RELATIONSHIP BETWEENT THE POST AND THE USER (STILL IN PROGRESS) 
// Create a new post

exports.create = (req, res) => {
      // var post = new Post(req.body);
      // const user = await User.findById(req.user);
      // console.log(req)
      // const currentUser = User.findById(req.userId);
      // console.log(currentUser._id)
      // post.author = req.userId;
        console.log(req.users._id)
        var post = new Post(req.body); 
        post.author = req.users._id;
        post
        .save((err, post) => {
          if (err) {
            res.status(500).send({ message: err });
          return;
          } else {
            res.send({ message: "Post was created!" });
          }
        })
        .then(post => {
             return User.findById(req.users._id);
        })
        .then(users => {
            users.posts.unshift(post);
            users.save();
            res.redirect('/');
        })
        .catch(err => {
            console.log(err.message);
        });
        };


// Update a post by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;
  Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update post with id=${id}. Maybe post was not found!`
        });
      } else res.send({ message: "Post was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Post with id=" + id
      });
    });
};

// Delete a post with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Post.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
        });
      } else {
        res.send({
          message: "Post was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Post with id=" + id
      });
    });
};


//FOR TESTING PURPOSES ONLY


// Retrieve all posts from the database.
exports.findAll = async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  } catch(err){
    consosle.error(err);
    res.status(500).send();
  }
};

// Find a single post with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Post.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found post with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving post with id=" + id });
    });
};


// Delete all posts from the database.
exports.deleteAll = (req, res) => {
  Post.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Posts were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Posts."
      });
    });
};
