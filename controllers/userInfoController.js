const db = require("../models");

// Defining methods for the booksController
module.exports = {
  checkUserEmail: function(req, res) {

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

  addUser: function(req, res) {

    const { email, password } = req.body

    db.UserInfo
      .update({
          password
      }, {
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

};