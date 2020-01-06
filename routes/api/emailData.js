const router = require("express").Router();
const emailData = require("../../controllers/emailDataController");

router.route("/:email")
    .get(emailData.findAllByEmail)
    .post(emailData.addEmail)

router.route("/id/:id/:colName")
    .put(emailData.updateById)
    .delete(emailData.deleteById)


module.exports = router;