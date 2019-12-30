const router = require("express").Router();
const futureController = require("../../controllers/futureController");

router.route("/date/:date")
    .get(futureController.findByDateAnyTeam)

router.route("/conference/:conference/:days")
    .get(futureController.findGamesByConference)

router.route("/division/:division/:days/:rival")
    .get(futureController.findGamesByDivision)

router.route("/team/:team/:days/:location/:rival")
    .get(futureController.findGamesByTeam)

module.exports = router;