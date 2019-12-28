const db = require("../models");
const Op = db.Sequelize.Op;
const teamInfo = require("../scrape/teamInfo");

// Defining methods for the booksController
module.exports = {
  findByDateAnyTeam: function(req, res) {
    db.Completed
      .findAll({
          where: {
              date: req.params.date
          }
      })
      .then(scores => res.json(scores))
      .catch(err => res.status(422).json(err));
  },

  findLastFiveByTeam: function(req, res) {

    const team = teamInfo.teamNameDehyphenator(req.params.team);

    db.Completed
      .findAll({
          limit: 5,
          where: {
              [Op.or]: [{ winner: team }, { loser: team }]
          },
          order: [[ "date", "DESC" ]]
      })
      .then(scores => res.json(scores))
      .catch(err => res.status(422).json(err));
  }
};