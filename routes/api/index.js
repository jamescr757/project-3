const router = require("express").Router();
const completedScoreRoutes = require("./completed");
const highlightRoutes = require("./highlight");

// Book routes
router.use("/completed", completedScoreRoutes);

router.use("/highlight", highlightRoutes)

module.exports = router;
