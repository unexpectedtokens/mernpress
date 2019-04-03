const express = require("express");
const router = express.Router();
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const User = require("../../db/models/User");
const db = require("../../db/db");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

router.use("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "Email already exists"
      });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (e, s) => {
        bcrypt.hash(newUser.password, s, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.json(user);
            })
            .catch(e => {
              console.log(e);
            });
        });
      });
    }
  });
});
router.use("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const username = req.body.username;
  const password = req.body.password;

  //find user by email
  User.findOne({ username }).then(user => {
    if (!user) {
      errors.email = "user does not exist";
      return res.status(404).json(errors);
    }

    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //user Matched
        const payload = {
          id: user.id,
          name: user.username
        }; //JWT Payload

        //sign token
        JWT.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 3600
          },
          (err, token) => {
            res.json({
              succes: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});
router.use(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email
    });
  }
);
module.exports = router;
