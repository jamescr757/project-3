const db = require("../models");

// Defining methods for the booksController
module.exports = {
  getRecords: function(req, res) {

    const { order } = req.params

    db.Standings
      .findAll({
        order: [[order, "ASC"], [ "points", "DESC" ]]
      })
      .then((data) => res.send(data))
      .catch(err => {
        console.log(err.errors[0].message);
        res.send("error")
      });
  },

};