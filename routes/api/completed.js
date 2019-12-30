const router = require("express").Router();
const completedController = require("../../controllers/completedController");

router.route("/date/:date")
    .get(completedController.findByDateAnyTeam)

router.route("/:category/:identifier/:days/:location/:outcome/:rival/:ot")
    .get(completedController.findScoresByCategory)

module.exports = router;