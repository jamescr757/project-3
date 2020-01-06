const router = require("express").Router();
const userInfo = require("../../controllers/userInfoController");

router.route("/check-email")
    .post(userInfo.checkUserEmail)

router.route("/add-user")
    .put(userInfo.addUser)

router.route("/grab-password/:email")
    .get(userInfo.grabUserPassword)


module.exports = router;