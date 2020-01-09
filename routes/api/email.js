const router = require("express").Router();
const emailScoresNow = require("../../controllers/emailScoresNow");
const emailForgotPassword = require("../../email/forgotPassword");

router.route("/forgot-password/:email")
    .get(emailForgotPassword.forgotPassword)

router.route("/:email")
    .get(emailScoresNow)

module.exports = router;