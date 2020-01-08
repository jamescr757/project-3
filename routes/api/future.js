const router = require("express").Router();
const futureController = require("../../controllers/futureController");

router.route("/date/:date")
    .get(futureController.findByDateAnyTeam)

router.route("/:category/:identifier/:days/:location/:rival/:sort")
    .get(futureController.findGamesByCategory)

module.exports = router;