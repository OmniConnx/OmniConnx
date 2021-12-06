const db = require("../models");
const Skill = db.skills;
const User = db.users;
const Post = db.posts;

// Create a skill with no relationship to user or post at all
exports.create = (req, res) => { 
    // skillsArr = ["Neurosurgery", "Pediatrics", "Cardiologist"]

//     for (i=0;i<skillsArr.length;i++){
//         const skill = new Skill ({
//             skillName: skillsArr[i],
//         })
//         skill
//         .save()
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while creating the Skill."
//         });
//     });
//    }
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
//   exports.update = (req, res) => {
//       // if there is a post id then we will be updating the post with the new skill
//       //and if it does then we will be updating the user with the new skill
      

//       };
      



