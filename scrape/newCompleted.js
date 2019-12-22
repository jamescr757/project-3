const moment = require("moment");
const chalk = require("chalk");

module.exports = function scrapeNewCompleted(db) {

    const yesterday = moment().subtract(1, 'days').format("YYYYMMDD");

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
            console.log("past days to scrape", chalk.green(pastDaysToScrape));
        } else {
            pastDaysToScrape = 0;
        }

        for (let dayNum = 0; dayNum < pastDaysToScrape; dayNum++) {

            const seasonDate = moment(lastScrapeDate).add(dayNum + 1, 'days').format("YYYYMMDD");
            console.log(chalk.green("season date"), seasonDate);
    
            require("./axiosScrape")(db, seasonDate);
        }
    })
    .catch(error => console.log(error.message));

}