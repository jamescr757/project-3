
module.exports = function emailScores(db) {

    db.UserInfo
        .findAll({})
        .then((data) => {
            
            data.forEach((entry) => {
                const { email } = entry.dataValues;

                require("./emailScores")(email);
            })

        })
        .catch(err => {
            console.log(err);
            console.log("error with UserInfo query while emailing the scores");
        });

}
