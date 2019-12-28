const db = require("../models");
const Op = db.Sequelize.Op;
const teamInfo = require("../scrape/teamInfo");

// Defining methods for the booksController
module.exports = {
  findByDateAnyTeam: function(req, res) {
    db.Future
      .findAll({
          where: {
              date: req.params.date
          }
      })
      .then(games => res.json(games))
      .catch(err => res.status(422).json(err));
  },

  findNextFiveByTeam: function(req, res) {

    const team = teamInfo.teamNameDehyphenator(req.params.team);

    db.Future
      .findAll({
          limit: 5,
          where: {
              [Op.or]: [{ homeTeam: team }, { awayTeam: team }]
          },
          order: [[ "date", "ASC" ]]
      })
      .then(games => res.json(games))
      .catch(err => res.status(422).json(err));
  }
};