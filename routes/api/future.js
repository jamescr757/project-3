const router = require("express").Router();
const futureController = require("../../controllers/futureController");

router.route("/date/:date")
    .get(futureController.findByDateAnyTeam)

router.route("/conference/:conference/:days")
    .get(futureController.findGamesByConference)

router.route("/division/:division/:days")
    .get(futureController.findGamesByDivision)

router.route("/team/:team/:days")
    .get(futureController.findGamesByTeam)

module.exports = router;