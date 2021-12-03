const db = require("../models");
const Skill = db.skills;
// Create a skill with no relationship to user or post at all
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
  exports.update = (req, res) => {
      if (!req.body) {
          return res.status(400).send({
              message: "Skill content can not be empty"
          })
      };
      

  };

