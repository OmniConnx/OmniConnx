// Create a post and save it with the user
exports.create = (req, res) => { 
    var skill = new Skill(req.body);
    skill.author = req.userId;
  
    if (req.userId) { var skill = new Skill(req.body); 
      skill.author = req.userId;
      skill
      .save()
      .then(skill => {
          return User.findById(req.userId);
      })
      .then(user => {
          user.skills.unshift(skill);
          user.save();
          res.redirect('/user');
      })
      .catch(err => {
          console.log(err.message);
      });
      } else {
        return res.status(401); 
      }
  };