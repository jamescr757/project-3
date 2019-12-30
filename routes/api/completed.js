const router = require("express").Router();
const completedController = require("../../controllers/completedController");

router.route("/date/:date")
    .get(completedController.findByDateAnyTeam)

router.route("/conference/:conference/:days/:ot")
    .get(completedController.findScoresByConference)

router.route("/division/:division/:days/:rival/:ot")
    .get(completedController.findScoresByDivision)

router.route("/team/:team/:days/:location/:outcome/:rival/:ot")
    .get(completedController.findScoresByTeam)

module.exports = router;