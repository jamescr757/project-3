const router = require("express").Router();
const standingsController = require("../../controllers/standingsController");

router.route("/:order")
    .get(standingsController.getRecords)

module.exports = router;