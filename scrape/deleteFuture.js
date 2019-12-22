const moment = require("moment");
const chalk = require("chalk");

module.exports = function deleteFuture(db) {

    const today = moment().subtract(1, 'days').format("YYYYMMDD");

    let closestDate;
    db.Future.findAll({
        limit: 1,
        where: {},
        order: [[ "date", "ASC" ]]
    })
    .then(data => {
        closestDate = moment(data[0].dataValues.date, "YYYYMMDD").format("YYYYMMDD");

        if (closestDate <= today) {
            daysToDelete = moment(today).diff(moment(closestDate), "days") + 1;
            console.log("days to delete", chalk.green(daysToDelete));
        } else {
            daysToDelete = 0;
        }

        for (let dayNum = 0; dayNum < daysToDelete; dayNum++) {

            const deleteDate = moment(closestDate).add(dayNum, 'days').format("YYYYMMDD");

            db.Future.destroy({
                where: {
                    date: deleteDate
                }
            })
            .catch(error => console.log(error.message));
        }
    })
    .catch(error => console.log(error.message));

}