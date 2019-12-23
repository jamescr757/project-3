const router = require("express").Router();
const futureController = require("../../controllers/futureController");

router.route("/date/:date")
    .get(futureController.findByDateAnyTeam)


module.exports = router;