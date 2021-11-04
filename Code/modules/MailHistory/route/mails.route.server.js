const express = require('express');
const router = express.Router();
const passport = require("passport");
const authorization = require("../../../config/authorization.config");
const controller = require('../controller/mails.controller');

router.route("/:orgId/:prcId").get(
    passport.authenticate("jwt", {
        session: false,
    }),
    authorization.canDisplayAnalysis(),
    controller.getAll
);


module.exports = router;