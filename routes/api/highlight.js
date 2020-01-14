const router = require("express").Router();
const youtubeAPI = require("../../controllers/youtubeAPI");

router.route("/:teams/date/:date/:type")
    .get(youtubeAPI.findHighlight)

router.route("/:homeTeam/:awayTeam/date/:date/:type")
    .get(youtubeAPI.findEmailHighlight)


module.exports = router;