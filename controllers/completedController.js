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

  // findScoresByTeam: function(req, res) {

  //   const { team, days, location, outcome, rival, ot } = req.params;

  //   const searchTeam = teamInfo.teamNameDehyphenator(team);
  //   const endDate = moment().subtract(1, "days").format("YYYYMMDD");
  //   const startDate = moment().subtract(days, "days").format("YYYYMMDD");

  //   const whereObj = { date: { [Op.between]: [startDate, endDate] } };

  //   switch (location) {
  //     case "home":
  //       whereObj.homeTeam = searchTeam;
  //       break;
  //     case "away":
  //       whereObj.awayTeam = searchTeam;
  //       break;
  //     default: 
  //       whereObj[Op.or] =  [{homeTeam: searchTeam}, {awayTeam: searchTeam}];
  //       break;
  //   }

  //   switch (outcome) {
  //     case "win":
  //       whereObj.winner = searchTeam;
  //       break;
  //     case "loss":
  //       whereObj.loser = searchTeam;
  //       break;
  //     default: 
  //       location === "all" ? "" : whereObj[Op.or] =  [{winner: searchTeam}, {loser: searchTeam}];
  //       break;
  //   }

  //   switch (rival) {
  //     case "division":
  //       whereObj.homeTeamDivision = teamInfo.teamDivisionGenerator(searchTeam);
  //       whereObj.awayTeamDivision = teamInfo.teamDivisionGenerator(searchTeam);
  //       break;
  //     default: 
  //       break;
  //   }

  //   switch (ot) {
  //     case "regulation":
  //       whereObj.overtime = false;
  //       break;
  //     case "overtime":
  //       whereObj.overtime = true;
  //       break;
  //     default: 
  //       break;
  //   }

  //   db.Completed
  //     .findAll({
  //         where: whereObj,
  //         order: [[ "date", "DESC" ]]
  //     })
  //     .then(scores => res.json(scores))
  //     .catch(err => {
  //       console.log(err);
  //       res.status(422).json(err)
  //     });
  // },

  findScoresByCategory: function(req, res) {

    const { category, identifier, days, location, outcome, rival, ot } = req.params;

    const searchTeam = teamInfo.teamNameDehyphenator(identifier);

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
        break;
    }

    switch (category) {
      case "division":
        whereObj[Op.or] = [{homeTeamDivision: identifier}, {awayTeamDivision: identifier}]
        break;
      case "team":
        whereObj[Op.or] =  [{homeTeam: searchTeam}, {awayTeam: searchTeam}];
        break;
      default: 
        identifier === "All Teams" ? "" : whereObj[Op.or] = [{homeTeamConference: identifier}, {awayTeamConference: identifier}]
        break;
    }

    switch (rival) {
      case "division":
        whereObj.homeTeamDivision = teamInfo.teamDivisionGenerator(searchTeam) || identifier;
        whereObj.awayTeamDivision = teamInfo.teamDivisionGenerator(searchTeam) || identifier;
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
  }

};