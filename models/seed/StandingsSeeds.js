const teamInfo = require("../../scrape/teamInfo");
const db = require("../index");

// module.exports = function StandingsSeeds(db) {

    teamInfo.teamsArray.forEach((team, index) => {

        db.Standings
            .create({
                team: team,
                division: teamInfo.teamDivisionGenerator(team),
                conference: teamInfo.teamConferenceGenerator(team)
            })
            .catch(err => {
                console.log(err);
            })
    })

// }