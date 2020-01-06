const router = require("express").Router();
const completedController = require("../../controllers/completedController");

router.route("/:email")
    .get(completedController.emailScores)

module.exports = router;