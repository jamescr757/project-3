const moment = require("moment");

module.exports = function updateNextEmail(db) {

    db.EmailData
      .findAll({
        where: {
          nextEmail: moment().utcOffset(-7).format("YYYYMMDD"),
          emailSent: true
        }
      })
      .then((data) => {

        data.forEach((entry) => {

          const { id, frequency, nextEmail } = entry.dataValues;

          const newNextEmail = moment(nextEmail, "YYYYMMDD").add(frequency, "days").format("YYYYMMDD");

          db.EmailData
            .update({
              nextEmail: newNextEmail,
              emailSent: false
            }, {
              where: {
                id: id
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
      })
      .catch(err => {
        console.log(err);
      });

      db.EmailData
        .findAll({
          where: {
            nextEmail: moment().utcOffset(-7).format("YYYYMMDD"),
            emailSent: false
          }
        })
        .then((data) => {

          data.forEach((entry) => {

            const { id, nextEmail } = entry.dataValues;

            const newNextEmail = moment(nextEmail, "YYYYMMDD").add(1, "days").format("YYYYMMDD");

            db.EmailData
              .update({
                nextEmail: newNextEmail,
              }, {
                where: {
                  id: id
                }
              })
              .catch(err => {
                console.log(err);
              });
          })
        })
        .catch(err => {
          console.log(err);
        });

}