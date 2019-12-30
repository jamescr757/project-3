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

    const { team, days, location, outcome, rival, ot } = req.params;

    const searchTeam = teamInfo.teamNameDehyphenator(team);
    const endDate = moment().subtract(1, "days").format("YYYYMMDD");
    const startDate = moment().subtract(days, "days").format("YYYYMMDD");

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

    switch (outcome) {
      case "win":
        whereObj.winner = searchTeam;
        break;
      case "loss":
        whereObj.loser = searchTeam;
        break;
      default: 
        location === "all" ? "" : whereObj[Op.or] =  [{winner: searchTeam}, {loser: searchTeam}];
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

    switch (ot) {
      case "regulation":
        whereObj.overtime = false;
        break;
      case "overtime":
        whereObj.overtime = true;
        break;
      default: 
        break;
    }

    db.Completed
      .findAll({
          where: whereObj,
          order: [[ "date", "DESC" ]]
      })
      .then(scores => res.json(scores))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },

  findScoresByDivision: function(req, res) {

    const { division, days, rival, ot } = req.params;

    const endDate = moment().subtract(1, "days").format("YYYYMMDD");
    const startDate = moment().subtract(days, "days").format("YYYYMMDD");

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

    switch (ot) {
      case "regulation":
        whereObj.overtime = false;
        break;
      case "overtime":
        whereObj.overtime = true;
        break;
      default: 
        break;
    }

    db.Completed
      .findAll({
          where: whereObj,
          order: [[ "date", "DESC" ]]
      })
      .then(scores => res.json(scores))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },

  findScoresByConference: function(req, res) {

    const { conference, days, ot } = req.params;

    const endDate = moment().subtract(1, "days").format("YYYYMMDD");
    const startDate = moment().subtract(days, "days").format("YYYYMMDD");

    const whereObj = { date: { [Op.between]: [startDate, endDate] } };

    switch (conference) {
      case "All Teams":
        break;
      default: 
        whereObj[Op.or] = [{homeTeamConference: conference}, {awayTeamConference: conference}];
        break;
    }

    switch (ot) {
      case "regulation":
        whereObj.overtime = false;
        break;
      case "overtime":
        whereObj.overtime = true;
        break;
      default: 
        break;
    }

    db.Completed
      .findAll({
          where: whereObj,
          order: [[ "date", "DESC" ]]
      })
      .then(scores => res.json(scores))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }

};