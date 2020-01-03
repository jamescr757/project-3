const router = require("express").Router();
const completedController = require("../../controllers/completedController");

router.route("/:category/:identifier/:days")
    .get(completedController.emailScoresByCategory)

module.exports = router;