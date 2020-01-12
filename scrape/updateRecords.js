const axios = require("axios");
const cheerio = require("cheerio");
const moment = require("moment");

module.exports = function updateRecords(db) {

    const nhlEndDate = moment("04/04/2020", "MM/DD/YYYY").format("YYYYMMDD");

    const today = moment().utcOffset(-8).format("YYYYMMDD");

    const futureDaysToScrape = moment(nhlEndDate).diff(moment(today), "days") > 15 ? 15 : moment(nhlEndDate).diff(moment(today), "days");
    console.log(futureDaysToScrape);
    
    for (let dayNum = 0; dayNum <= futureDaysToScrape; dayNum++) {
        
            const seasonDate = moment(today).add(dayNum, 'days').format("YYYYMMDD");
        
        axios.get(`https://www.espn.com/nhl/scoreboard/_/date/${seasonDate}`)
        .then(function(response) {

            const $ = cheerio.load(response.data);

            const teams = $(".Scoreboard").find(".ScoreCell__TeamName");

            const records = $(".Scoreboard").find("span.ScoreboardScoreCell__Record");

            for (teamIndex = 0; teamIndex < teams.length; teamIndex += 2) {

                const awayTeam = teams[teamIndex].children[0].data.toLowerCase();
                const homeTeam = teams[teamIndex + 1].children[0].data.toLowerCase();

                db.Future.update({

                    homeTeamRecord: `${records[teamIndex + 1].children[0].data}`,

                }, {
                    where: {
                        homeTeam,
                    }
                })
                    .catch((error) => console.log(error.message));


                db.Future.update({

                    awayTeamRecord: `${records[teamIndex].children[0].data}`,

                }, {
                    where: {
                        awayTeam,
                    }
                })
                    .catch((error) => console.log(error.message));

            }

        })
        .catch(error => console.log(error.message));

    }
}