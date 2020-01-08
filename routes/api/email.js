const router = require("express").Router();
const emailScoresNow = require("../../controllers/emailScoresNow");

router.route("/:email")
    .get(emailScoresNow)

module.exports = router;