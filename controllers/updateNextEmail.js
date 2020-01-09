const moment = require("moment");

module.exports = function updateNextEmail(db) {

    db.EmailData
      .findAll({
        where: {
          nextEmail: moment().format("YYYYMMDD")
        }
      })
      .then((data) => {

        data.forEach((entry) => {

          const { id, frequency, nextEmail } = entry.dataValues;

          const newNextEmail = moment(nextEmail, "YYYYMMDD").add(frequency, "days").format("YYYYMMDD");

          db.EmailData
            .update({
              nextEmail: newNextEmail
            }, {
              where: {
                id: id
              }
            })
            .then(() => {})
            .catch(err => {
              console.log(err);
            });
        })
      })
      .catch(err => {
        console.log(err);
      });

}