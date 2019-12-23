const router = require("express").Router();
const completedScoreRoutes = require("./completed");
const futureScoreRoutes = require("./future");
const highlightRoutes = require("./highlight");


router.use("/completed", completedScoreRoutes);

router.use("/future", futureScoreRoutes);

router.use("/highlight", highlightRoutes);

module.exports = router;
