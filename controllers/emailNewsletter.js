const db = require("../models");
const Op = db.Sequelize.Op;
const moment = require("moment");

module.exports = function emailScores(db) {

    db.UserInfo
        .findAll({})
        .then((data) => {
            data.forEach((entry) => {
                const { email } = entry.dataValues;

                require("./completedController").emailScores(email, db, Op, moment)
            })
        })
        .catch(err => {
            console.log(err);
            console.log("error with UserInfo query while emailing the scores");
        });

}
