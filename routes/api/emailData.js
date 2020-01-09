const router = require("express").Router();
const emailData = require("../../controllers/emailDataController");

router.route("/update-next-email/all")
    .get(emailData.updateNextEmail)

router.route("/id/:id/:colName")
    .put(emailData.updateById)
    .delete(emailData.deleteById)

router.route("/:email")
    .get(emailData.findAllByEmail)
    .post(emailData.addEmail)
    .delete(emailData.deleteEmailData)

module.exports = router;