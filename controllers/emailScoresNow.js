const db = require("../models");
const Op = db.Sequelize.Op;
const moment = require("moment");

module.exports = function emailScoresNow(req, res) {

    const userGameInfo = [];
    
    db.EmailData
        .findAll({
            where: {
                email: req.params.email
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
                    });
            }

            })
        })
        .then(()=>{

            setTimeout(() => {
                if (userGameInfo.length) {
                    res.send("success");
                }
            }, 1 * 1000);

            setTimeout(() => {
                if (userGameInfo.length) {
                    require("../email/email")(userGameInfo, req.params.email)
                }
            }, 10 * 1000);

        })
        .catch(err => {
            console.log(err);
            console.log("error with EmailData query while emailing the scores");
        });

}
