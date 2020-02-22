const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

console.log('users');

//get users route (returns custom json object, should return list of users)
router.get("/userslist", (req, res) => {
  User.find({}).then(users => {
    res.json(users)
  })
});
// get single user and return as json
router.get("/users/:userId", (req, res) => {
  User.findOne({_id: req.params.userId}).then(user => {
    res.json(user);
  })
});
// update user model in mongo document
router.get('/update/:userId/:dietType', (req, res) => {
  console.log('we have gotten this far, need to figure out how to update mongo doc');
  console.log('id param ' + req.params.userId);
  console.log('diet param ' + req.params.dietType);
  User.updateOne({_id:req.params.userId}, { $set: {"diet":req.params.dietType}}).then(user => {
    res.redirect('/');
  })
})

router.get('/updaterecipe/:userId/:recipe', (req, res) => {
  console.log('we have gotten this far, need to figure out how to update mongo doc');
  console.log('id param ' + req.params.userId);
console.log(req.params.recipe);
  User.updateOne({_id:req.params.userId}, { $set: {"recipe":req.params.recipe}}).then(user => {
    res.redirect('/');
  })
})
// @route POST api/users/register
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

// @route POST api/users/login
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  module.exports = router;
