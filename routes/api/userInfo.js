const router = require("express").Router();
const userInfo = require("../../controllers/userInfoController");

router.route("/check-email")
    .post(userInfo.updateUserPassword)

router.route("/add-user")
    .put(userInfo.newUser)

router.route("/grab-password/:email")
    .get(userInfo.grabUserPassword)

router.route("/update-email/:email")
    .post(userInfo.updateUserEmail)

router.route("/update-password/:email")
    .post(userInfo.updateUserPassword)


module.exports = router;