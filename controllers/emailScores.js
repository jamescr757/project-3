const db = require("../models");
const Op = db.Sequelize.Op;
const moment = require("moment");

module.exports = function emailScores(email) {
    
    const userGameInfo = [];

    db.EmailData
        .findAll({
            where: {
                email: email,
                nextEmail: moment().utcOffset(-7).format("YYYYMMDD")
            }
        })
        .then((data) => {

            data.forEach((entry, index) => {

                const { category, identifier, frequency, completedTable, futureTable, id } = entry.dataValues;

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
                            scores.forEach((game, index) => {
                                userGameInfo.push(game.dataValues);

                                if (index === 0) {
                                    db.EmailData
                                        .update({
                                            emailSent: true
                                        }, {
                                            where: {
                                                id: id
                                            }
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        })
                                }
                            })
                        })
                        .catch(err => {
                            console.log(err);
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
                            games.forEach((game, index) => {
                                userGameInfo.push(game.dataValues);

                                if (index === 0) {
                                    db.EmailData
                                        .update({
                                            emailSent: true
                                        }, {
                                            where: {
                                                id: id
                                            }
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        })
                                }
                            })
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }

            })
        })
        .then(()=>{
            setTimeout(() => {
              if (userGameInfo.length) {
                require("../email/email")(userGameInfo, email)
              }
            }, 10000);
        })
        .catch(err => {
            console.log(err);
            console.log("error with EmailData query while emailing the scores");
        });

}
