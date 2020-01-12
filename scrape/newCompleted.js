const moment = require("moment");

module.exports = function scrapeNewCompleted(db) {

    const yesterday = moment().utcOffset(-8).subtract(1, 'days').format("YYYYMMDD");

    let lastScrapeDate;
    let pastDaysToScrape;

    db.Completed.findAll({
        limit: 1,
        where: {},
        order: [[ "date", "DESC" ]]
    })
    .then(data => {
      lastScrapeDate = moment(data[0].dataValues.date, "YYYYMMDD").format("YYYYMMDD");

        if (lastScrapeDate < yesterday) {
            pastDaysToScrape = moment(yesterday).diff(moment(lastScrapeDate), "days");
        } else {
            pastDaysToScrape = 0;
        }

        for (let dayNum = 0; dayNum < pastDaysToScrape; dayNum++) {

            const seasonDate = moment(lastScrapeDate).add(dayNum + 1, 'days').format("YYYYMMDD");
    
            require("./axiosScrape")(db, seasonDate);
        }
    })
    .catch(error => console.log(error.message));

}