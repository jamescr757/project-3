const db = require("../models");
const Op = db.Sequelize.Op;
const teamInfo = require("../scrape/teamInfo");
const moment = require("moment");

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

  findScoresByTeam: function(req, res) {

    const team = teamInfo.teamNameDehyphenator(req.params.team);
    const endDate = moment().subtract(1, "days").format("YYYYMMDD");
    const startDate = moment().subtract(req.params.days, "days").format("YYYYMMDD");

    db.Completed
      .findAll({
          where: {
              
            [Op.or]: [{winner: team}, {loser: team}],

            date: {
              [Op.between]: [startDate, endDate]
            }

          },
          order: [[ "date", "DESC" ]]
      })
      .then(scores => res.json(scores))
      .catch(err => res.status(422).json(err));
  },

  findScoresByDivision: function(req, res) {

    const endDate = moment().subtract(1, "days").format("YYYYMMDD");
    const startDate = moment().subtract(req.params.days, "days").format("YYYYMMDD");

    db.Completed
      .findAll({
          where: {
            
            [Op.or]: [{homeTeamDivision: req.params.division}, {awayTeamDivision: req.params.division}],

            date: {
              [Op.between]: [startDate, endDate]
            }

          },
          order: [[ "date", "DESC" ]]
      })
      .then(scores => res.json(scores))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },

  findScoresByConference: function(req, res) {

    const endDate = moment().subtract(1, "days").format("YYYYMMDD");
    const startDate = moment().subtract(req.params.days, "days").format("YYYYMMDD");

    db.Completed
      .findAll({
          where: {

            [Op.or]: [{homeTeamConference: req.params.conference}, {awayTeamConference: req.params.conference}],

            date: {
              [Op.between]: [startDate, endDate]
            }

          },
          order: [[ "date", "DESC" ]]
      })
      .then(scores => res.json(scores))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }

};