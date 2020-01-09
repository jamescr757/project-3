const router = require("express").Router();
const youtubeAPI = require("../../controllers/youtubeAPI");

router.route("/:teams/date/:date/:type")
    .get(youtubeAPI.findHighlight)


module.exports = router;