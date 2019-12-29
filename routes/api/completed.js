const router = require("express").Router();
const completedController = require("../../controllers/completedController");

router.route("/date/:date")
    .get(completedController.findByDateAnyTeam)

router.route("/conference/:conference/:days")
    .get(completedController.findScoresByConference)

router.route("/division/:division/:days")
    .get(completedController.findScoresByDivision)

router.route("/team/:team/:days")
    .get(completedController.findScoresByTeam)

module.exports = router;