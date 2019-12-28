const router = require("express").Router();
const futureController = require("../../controllers/futureController");

router.route("/date/:date")
    .get(futureController.findByDateAnyTeam)

router.route("/team/:team")
    .get(futureController.findNextFiveByTeam)

module.exports = router;