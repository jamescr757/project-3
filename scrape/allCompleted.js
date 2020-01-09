const moment = require("moment");

module.exports = function scrapeAllCompleted(db) {

    const yesterday = moment().utcOffset(-6).subtract(1, 'days').format("YYYYMMDD");
    const nhlStartDate = moment("10/02/2019", "MM/DD/YYYY").format("YYYYMMDD");
    const seasonCompletedDays = moment(yesterday).diff(moment(nhlStartDate), "days");

    for (let dayNum = 0; dayNum <= seasonCompletedDays; dayNum++) {

        const seasonDate = moment(nhlStartDate).add(dayNum, 'days').format("YYYYMMDD");

        require("./axiosScrape")(db, seasonDate);

    }
}