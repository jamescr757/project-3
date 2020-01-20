const db = require("../models");

// Defining methods for the booksController
module.exports = {
  getRecords: function(req, res) {

    const { order } = req.params

    const orderObj = {};
    switch (order) {
      case "league": 
        orderObj.order = [[ "points", "DESC" ]] 
        break;
      default: 
        orderObj.order = [["conference", "ASC"], [order, "ASC"], [ "points", "DESC" ]]
        break;
    }

    db.Standings
      .findAll(orderObj)
      .then((data) => res.send(data))
      .catch(err => {
        console.log(err.errors[0].message);
        res.send("error")
      });
  },

};