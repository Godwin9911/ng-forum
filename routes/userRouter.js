/* eslint-disable no-console */
const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');

function routes(User) {
  const userRouter = express.Router();

  userRouter.route('/register')
    .post((req, res) => {
      User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
          return res.status(403).json({ message: 'email already exists' });
        }
        const newUser = new User(req.body);
        bcrypt.genSalt(10, (err, salt) => {
          // eslint-disable-next-line no-shadow
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save();
            return res.status(201).json(newUser);
          });
        });
      });
    });

  userRouter.route('/login')
    .post(passport.authenticate('local', {
      failureRedirect: 'login',
      failureFlash: true
    }),
    (req, res, next) => {
      res.status(200).json(req.user);
      next();
    })
    .get((req, res) => {
      const message = req.flash('error');
      res.status(401).json({ message });
    });

  userRouter.route('/logout')
    .get((req, res) => {
      req.logout();
      res.status(200).json({ message: 'logout successfull' });
    });

  userRouter.route('/checkidentity')
    .get((req, res) => {
      res.locals.user = req.user || null;
      if (res.locals.user) return res.status(200).json(req.user);
      return res.status(404).json({ message: 'not logged In' });
    });

  return userRouter;
}

module.exports = routes;
