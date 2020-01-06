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
      case "true":
        whereObj.homeTeamDivision = teamInfo.teamDivisionGenerator(searchTeam) || identifier;
        whereObj.awayTeamDivision = teamInfo.teamDivisionGenerator(searchTeam) || identifier;
        break;
      default:
        break;
    }

    // whereObj.homeTeamDivision = { $col: "awayTeamDivision" }

    switch (ot) {
      // case "regulation":
      //   whereObj.overtime = false;
      //   break;
      case "true":
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

  emailScores: function(req, res) {

    const userGameInfo = [];

    db.EmailData
      .findAll({
        where: {
          email: req.params.email,
          nextEmail: moment().add(1, "days").format("YYYYMMDD")
          // nextEmail: moment().format("YYYYMMDD")
        }
      })
      .then((data) => {

        data.forEach((entry, index) => {

          const { category, identifier, frequency, completedTable, futureTable } = entry.dataValues;

          const whereObj = {};
          switch (category) {
            case "division":
              whereObj[Op.or] = [{homeTeamDivision: identifier}, {awayTeamDivision: identifier}]
              break;
            case "team":
              whereObj[Op.or] =  [{homeTeam: identifier}, {awayTeam: identifier}];
              break;
            default:
              identifier === "All Teams" ? "" : whereObj[Op.or] = [{homeTeamConference: identifier}, {awayTeamConference: identifier}]
              break;
          }

          if (completedTable) {
            const endDate = moment().subtract(1, "days").format("YYYYMMDD");
            const startDate = moment().subtract(frequency, "days").format("YYYYMMDD");

            whereObj.date = { [Op.between]: [startDate, endDate] };

            db.Completed
              .findAll({
                  where: whereObj,
                  order: [[ "date", "DESC" ]]
              })
              .then(scores => {
                scores.forEach(game => {
                  userGameInfo.push(game.dataValues);
                })
              })
              .catch(err => {
                console.log(err);
                res.status(422).json(err)
              });
          }

          if (futureTable) {
            const startDate = moment().format("YYYYMMDD");
            const endDate = moment().add(parseInt(frequency) - 1, "days").format("YYYYMMDD");

            whereObj.date = { [Op.between]: [startDate, endDate] };

            db.Future
              .findAll({
                  where: whereObj,
                  order: [[ "date", "ASC" ]]
              })
              .then(games => {
                games.forEach(game => {
                  userGameInfo.push(game.dataValues);
                })
              })
              .catch(err => {
                console.log(err);
                res.status(422).json(err)
              });
          }

        })
      })
      .then(()=>{
        setTimeout(() => {
          require("../email/email")(userGameInfo)
        }, 100);
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }

}

// require("../email/email")(userGameInfo)