const db = require("../models");
const Post = db.posts;
const User = db.users;
const Skill = db.skills;


exports.create =  (req, res) => { 
  var post = new Post(req.body);
  post.author = req.userId;
  console.log("POST CREATED")
  var skillArray = []
  if (req.userId) { 
    for (let i = 0; i < req.body.skills.length; i++) {
      var existingSkill = Skill.findOne({skillName: req.body.skills[i]})
      existingSkill.then(skill => {
        if (!skill) {
          res.status(404).send({
            message: `Doesnt exist`
          });
        } else {
          skillArray.push(skill)
          console.log(skill)
        }
        post.skillsList.unshift(skill.id);
      if ( i == req.body.skills.length - 1) {  
        post
        .save()
        .then(post => {
          for (let i = 0; i < skillArray.length; i++) {
            skillArray[i].posts.unshift(post);
            skillArray[i].users.unshift(req.userId);
            skillArray[i].save()
          }
            return User.findById(req.userId);
       })
        .then(user => {
          for ( let i = 0; i < skillArray.length; i++) {
            user.skills.unshift(skillArray[i].id);
          }
           user.posts.unshift(post);
           user.save();
           res.redirect('/post');
        })
      .catch(err => {
          console.log(err.message);
      });
      }
    })
  }
  } else {
      return res.status(401); 
    } 
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
          message: `Cannot update post with id=${id}. Post not found!`
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
    const posts = await Post.find({});
    res.json(posts);
    console.log("POSTS")
    console.log(posts)
  } catch(err){
    //!
    console.error(err);
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
