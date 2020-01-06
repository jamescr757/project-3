const router = require("express").Router();
const completedScoreRoutes = require("./completed");
const futureScoreRoutes = require("./future");
const highlightRoutes = require("./highlight");
const emailRoutes = require("./email");
const userInfoRoutes = require("./userInfo");
const emailDataRoutes = require("./emailData");


router.use("/completed", completedScoreRoutes);

router.use("/future", futureScoreRoutes);

router.use("/highlight", highlightRoutes);

router.use("/email", emailRoutes);

router.use("/user-info", userInfoRoutes);

router.use("/email-data", emailDataRoutes);

module.exports = router;
