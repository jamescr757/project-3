const axios = require("axios");
const cheerio = require("cheerio");
const teamInfo = require("./teamInfo");

module.exports = function scrape(db, seasonDate) {

    axios.get(`https://www.espn.com/nhl/scoreboard/_/date/${seasonDate}`)
        .then(function(response) {

            const $ = cheerio.load(response.data);

            const scores = $(".Scoreboard").find(".ScoreCell__Score")

            const teams = $(".Scoreboard").find(".ScoreCell__TeamName");

            const records = $(".Scoreboard").find("span.ScoreboardScoreCell__Record");

            const periods = $(".Scoreboard").find(".ScoreboardScoreCell__Headings");

            for (i = 0; i < periods.length; i++) {
                const teamIndex = i * 2;

                const numberOfPeriods = periods[`${i}`].children.length - 1;
                let overtime;
                if (numberOfPeriods > 3) overtime = true;

                else overtime = false;

                const awayTeam = teams[teamIndex].children[0].data.toLowerCase();
                const awayID = teamInfo.teamIDGenerator(awayTeam);
                const awayDivision = teamInfo.teamDivisionGenerator(awayTeam);
                const awayConference = teamInfo.teamConferenceGenerator(awayTeam);
                const awayScore = scores[teamIndex].children[0].data;

                const homeTeam = teams[teamIndex + 1].children[0].data.toLowerCase();
                const homeID = teamInfo.teamIDGenerator(homeTeam);
                const homeDivision = teamInfo.teamDivisionGenerator(homeTeam);
                const homeConference = teamInfo.teamConferenceGenerator(homeTeam);
                const homeScore = scores[teamIndex + 1].children[0].data;

                let winner;
                let loser;
                if (awayScore > homeScore) {

                    winner = awayTeam;
                    loser = homeTeam;

                } else {

                    winner = homeTeam;
                    loser = awayTeam;

                }

                db.Completed.create({

                    date: `${seasonDate}`,
                    gameId: `${seasonDate}${awayID}${homeID}`,
                    scoreline: `${awayTeam}: ${awayScore} @ ${homeTeam}: ${homeScore}`,
                    winner,
                    loser,
                    overtime,
                    homeTeam,
                    homeTeamRecord: `${records[teamIndex + 1].children[0].data}`,
                    homeTeamDivision: homeDivision,
                    homeTeamConference: homeConference,
                    homeTeamScore: homeScore,
                    awayTeam,
                    awayTeamRecord: `${records[teamIndex].children[0].data}`,
                    awayTeamDivision: awayDivision,
                    awayTeamConference: awayConference,
                    awayTeamScore: awayScore

                })
                    .catch((error) => console.log(error.message));

            }

        })
        .catch(error => console.log(error));

}