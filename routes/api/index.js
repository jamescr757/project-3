const router = require("express").Router();
const completedScoreRoutes = require("./completed");
const futureScoreRoutes = require("./future");
const highlightRoutes = require("./highlight");
const emailRoutes = require("./email");


router.use("/completed", completedScoreRoutes);

router.use("/future", futureScoreRoutes);

router.use("/highlight", highlightRoutes);

router.use("/email", emailRoutes);

module.exports = router;
