const db = require("../models");
const Skill = db.skills;


// Create a single skill with no connection to a user or post at first
exports.create = (req, res) => { 
    if(!req.body.skillName) {
        res.status(400).send({ message: "Content can not be empty!"});
        return;
    }
    const skill = new Skill ({
        skillName: req.body.skillName,
    })
    skill
      .save()
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while creating the Skill."
          });
      });
  };

  exports.findAll = async (req, res) => {
    try{
      const skills = await Skill.find({});
      res.json(skills);
      console.log("Skills")
      console.log(skills)
    } catch(err){
      //!
      console.error(err);
      res.status(500).send();
    }
  };

// exports.update = (req, res) => {
// if there is a post id then we will be updating the post with the new skill
// and if it does then we will be updating the user with the new skill
// };
      



