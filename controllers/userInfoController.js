const db = require("../models");

// Defining methods for the booksController
module.exports = {
  newUser: function(req, res) {

    const { email, password } = req.body

    db.UserInfo
      .create({
          email,
          password
      })
      .then((data) => res.send(data))
      .catch(err => {
        console.log(err.errors[0].message);
        if (err.errors[0].message === "email must be unique") {
          res.send("already in system")
        } else if (err.errors[0].message === "Validation isEmail on email failed") {
          res.send("not an email")
        } else {
          res.send("error")
        }
      });
  },

  updateUserPassword: function(req, res) {

    db.UserInfo
      .update({
          password: req.body.newPassword
      }, {
        where: {
          email: req.params.email
        }
      })
      .then((data) => res.send(data))
      .catch(err => {
        console.log(err.errors[0].message);
        res.send("error")
      });
  },

  updateUserEmail: function(req, res) {

    db.UserInfo
      .update({
          email: req.body.newEmail
      }, {
        where: {
          email: req.params.email
        }
      })
      .then((data) => {
        db.EmailData
          .update({
            email: req.body.newEmail
          }, {
            where: {
              email: req.params.email
            }
          })
          .then(() => {
            res.send("success")
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err.errors[0].message);
        if (err.errors[0].message === "email must be unique") {
          res.send("already in system")
        } else if (err.errors[0].message === "Validation isEmail on email failed") {
          res.send("not an email")
        } else {
          res.send("error")
        }
      });
  },

  grabUserPassword: function(req, res) {

    const { email } = req.params

    db.UserInfo
      .findOne({
        where: {
          email: email
        }
      })
      .then((data) => res.send(data))
      .catch(err => {
        console.log(err.errors[0].message);
        res.send("error")
      });
  },

  deleteAccount: function(req, res) {

    const { email } = req.params

    db.UserInfo
      .destroy({
        where: {
          email,
        }
      })
      .then(() => res.send("delete successful"))
      .catch(err => {
        console.log(err.errors[0].message);
        res.send("error")
      });
  }

};