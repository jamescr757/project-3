const db = require("../models");
const Op = db.Sequelize.Op;
const moment = require("moment");

function loopThruEmailData(data) {

    const userGameInfo = [];

    return new Promise(resolve => {
        data.forEach(async (entry, index) => {

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
                const endDate = moment().utcOffset(-7).subtract(1, "days").format("YYYYMMDD");
                const startDate = moment().utcOffset(-7).subtract(frequency, "days").format("YYYYMMDD");
    
                whereObj.date = { [Op.between]: [startDate, endDate] };
    
                const scores = await db.Completed.findAll({
                        where: whereObj,
                        order: [[ "date", "DESC" ]]
                    })
    
                scores.forEach(game => userGameInfo.push(game.dataValues));
            }
    
            if (futureTable) {
                const startDate = moment().utcOffset(-7).format("YYYYMMDD");
                const endDate = moment().utcOffset(-7).add(parseInt(frequency) - 1, "days").format("YYYYMMDD");
    
                whereObj.date = { [Op.between]: [startDate, endDate] };
    
                const games = await db.Future.findAll({
                        where: whereObj,
                        order: [[ "date", "ASC" ]]
                    })
                
                games.forEach(game => userGameInfo.push(game.dataValues));
            }
    
            if (index === data.length - 1) {
                resolve(userGameInfo);
            }
        })
    })
}

module.exports = async function emailScoresNow(req, res) {
    
    const data = await db.EmailData.findAll({
            where: {
                email: req.params.email
            }
        })
    
    const userGameInfo = await loopThruEmailData(data);

    if (userGameInfo.length) {
        res.send("success");
        require("../email/email")(userGameInfo, req.params.email)
    } else {
        res.send("no games")
    }

}
