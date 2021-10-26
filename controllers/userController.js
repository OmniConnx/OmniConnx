const db = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = db.users;

dotenv.config();

// Register
/*
exports.signup = async (req, res) => {

  try {
    const { username, password, passwordVerify } = req.body;

    if (!username || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." })

    if (password.length < 6)
      return res
        .status(400)
        .json({ errorMessage: "Password must be at least 6 characters long." })

    if (password !== passwordVerify)
      return res.status(400).json({
        errorMessage: "Passwords do not match."
      });
    
    const existingUser = await User.findOne({ username });
    
    if (existingUser)
      return res
        .status(400)
        .json({ errorMessage: "Username already exists." });

    // hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the database
    
    const newUser = new User({
      username,
      passwordHash
    });

    const savedUser = await newUser.save();

    //sign the token

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
    }).send();

  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
    
};

// log in a user
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    //validate 
    if (!username || !password)
    return res
      .status(400)
      .json({ errorMessage: "Please enter all required fields." })
    
    const existingUser = await User.findOne({ username });
    if (!existingUser)
      return res
        .status(401)
        .json({ errorMessage: "Wrong username or password" });
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res
        .status(401)
        .json({ errorMessage: "Wrong username or password" });

    //sign the token
    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );
    // send the token in a HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
    }).send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

exports.logout = (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
};
*/

exports.create = async (req, res) => {
  try{
    const { username} = req.body;

    const newUser = new User({
      username
    });
    
    const user = await newUser.save();
    console.log("Saved user")

    res.json(user);
  } catch(err){
    console.error(err);
    res.status(500).send();
  }

};


//FOR TESTING PURPOSES

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      console.log(data)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Users."
      });
    });
};

