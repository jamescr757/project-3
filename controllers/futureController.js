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

  // findGamesByTeam: function(req, res) {

  //   const { team, days, location, rival } = req.params;

  //   const searchTeam = teamInfo.teamNameDehyphenator(team);
  //   const startDate = moment().format("YYYYMMDD");
  //   const endDate = moment().add(days, "days").format("YYYYMMDD");

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

  //   switch (rival) {
  //     case "division":
  //       whereObj.homeTeamDivision = teamInfo.teamDivisionGenerator(searchTeam);
  //       whereObj.awayTeamDivision = teamInfo.teamDivisionGenerator(searchTeam);
  //       break;
  //     default: 
  //       break;
  //   }

  //   db.Future
  //     .findAll({
  //         where: whereObj,
  //         order: [[ "date", "ASC" ]]
  //     })
  //     .then(games => res.json(games))
  //     .catch(err => res.status(422).json(err));
  // },

  // findGamesByDivision: function(req, res) {

  //   const { division, days, rival } = req.params;

  //   const startDate = moment().format("YYYYMMDD");
  //   const endDate = moment().add(days, "days").format("YYYYMMDD");

  //   const whereObj = { date: { [Op.between]: [startDate, endDate] } };
  //   switch (rival) {
  //     case "division":
  //       whereObj.homeTeamDivision = division;
  //       whereObj.awayTeamDivision = division;
  //       break;
  //     default: 
  //       whereObj[Op.or] = [{homeTeamDivision: division}, {awayTeamDivision: division}]
  //       break;
  //   }

  //   db.Future
  //     .findAll({
  //         where: whereObj,
  //         order: [[ "date", "ASC" ]]
  //     })
  //     .then(scores => res.json(scores))
  //     .catch(err => {
  //       console.log(err);
  //       res.status(422).json(err)
  //     });
  // },

  findGamesByCategory: function(req, res) {

    const { category, days, identifier, location, rival } = req.params;

    const searchTeam = teamInfo.teamNameDehyphenator(identifier);

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