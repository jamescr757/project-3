const router = require("express").Router();
const completedController = require("../../controllers/completedController");

router.route("/date/:date")
    .get(completedController.findByDateAnyTeam)

router.route("/conference/:conference")
    .get(completedController.findLastThreeDaysByConference)

router.route("/division/:division")
    .get(completedController.findLastThreeDaysByDivision)

router.route("/team/:team")
    .get(completedController.findLastFiveByTeam)

module.exports = router;