const router = require("express").Router();
const completedController = require("../../controllers/completedController");

router.route("/date/:date")
    .get(completedController.findByDateAnyTeam)

router.route("/:category/:identifier/:days/:location/:outcome/:rival/:ot/:sort")
    .get(completedController.findScoresByCategory)

router.route("/user-games/:days/:sort")
    .post(completedController.findUserScores)

module.exports = router;