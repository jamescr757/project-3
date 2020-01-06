const db = require("../models");

// Defining methods for the booksController
module.exports = {
  addEmail: function(req, res) {

    const { category, identifier, frequency, completedTable, futureTable } = req.body

    db.EmailData
      .create({
          email: req.params.email,
          category, 
          identifier,
          frequency,
          completedTable,
          futureTable
      })
      .then((data) => res.send(data))
      .catch(err => console.log(err));
  },

  findAllByEmail: function(req, res) {

    db.EmailData
      .findAll({
          where: {
            email: req.params.email
          }
      })
      .then((data) => res.send(data))
      .catch(err => {
        console.log(err.errors[0].message);
        res.send("error");
      });
  },

  updateById: function(req, res) {
    console.log(req.body.newValue);

    const updateObj = {};
    switch (req.params.colName) {
      case "completed":
        updateObj.completedTable = req.body.newValue;
        break;
      case "future":
        updateObj.futureTable = req.body.newValue;
        break;
      default:
        updateObj.frequency = req.body.newValue;
        break;
    }

    console.log(updateObj);

    db.EmailData
      .update(updateObj, {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.send("update successful"))
      .catch(err => {
        console.log(err);
        res.send("error");
      });
  },

  deleteById: function(req, res) {

    db.EmailData
      .destroy({
          where: {
            id: req.params.id
          }
      })
      .then(() => res.send("delete successful"))
      .catch(err => {
        console.log(err);
        res.send("error");
      });
  },

};