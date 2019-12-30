const db = require("../models");
const Op = db.Sequelize.Op;
const teamInfo = require("../scrape/teamInfo");
const moment = require("moment");

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

  findGamesByTeam: function(req, res) {

    const { team, days, location, rival } = req.params;

    const searchTeam = teamInfo.teamNameDehyphenator(team);
    const startDate = moment().format("YYYYMMDD");
    const endDate = moment().add(days, "days").format("YYYYMMDD");

    const whereObj = { date: { [Op.between]: [startDate, endDate] } };
    switch (location) {
      case "home":
        whereObj.homeTeam = searchTeam;
        break;
      case "away":
        whereObj.awayTeam = searchTeam;
        break;
      default: 
        whereObj[Op.or] =  [{homeTeam: searchTeam}, {awayTeam: searchTeam}];
        break;
    }

    switch (rival) {
      case "division":
        whereObj.homeTeamDivision = teamInfo.teamDivisionGenerator(searchTeam);
        whereObj.awayTeamDivision = teamInfo.teamDivisionGenerator(searchTeam);
        break;
      default: 
        break;
    }

    db.Future
      .findAll({
          where: whereObj,
          order: [[ "date", "ASC" ]]
      })
      .then(games => res.json(games))
      .catch(err => res.status(422).json(err));
  },

  findGamesByDivision: function(req, res) {

    const { division, days, rival } = req.params;

    const startDate = moment().format("YYYYMMDD");
    const endDate = moment().add(days, "days").format("YYYYMMDD");

    const whereObj = { date: { [Op.between]: [startDate, endDate] } };
    switch (rival) {
      case "division":
        whereObj.homeTeamDivision = division;
        whereObj.awayTeamDivision = division;
        break;
      default: 
        whereObj[Op.or] = [{homeTeamDivision: division}, {awayTeamDivision: division}]
        break;
    }

    db.Future
      .findAll({
          where: whereObj,
          order: [[ "date", "ASC" ]]
      })
      .then(scores => res.json(scores))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },

  findGamesByConference: function(req, res) {

    const { conference, days } = req.params;

    const startDate = moment().format("YYYYMMDD");
    const endDate = moment().add(days, "days").format("YYYYMMDD");

    const whereObj = { date: { [Op.between]: [startDate, endDate] } };

    switch (conference) {
      case "All Teams":
        break;
      default: 
        whereObj[Op.or] = [{homeTeamConference: conference}, {awayTeamConference: conference}];
        break;
    }

    db.Future
      .findAll({
          where: whereObj,
          order: [[ "date", "ASC" ]]
      })
      .then(scores => res.json(scores))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }
};