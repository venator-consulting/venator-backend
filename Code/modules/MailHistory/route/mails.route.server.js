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

//#region mail analysis
router.route("/:orgId/:prcId/mail-analysis").get(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    controller.getMailAnalysis
  );

  router.route("/:orgId/:prcId/mail-analysis/:word").get(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    controller.getMailDetailsAnalysis
  );
  //#endregion mail analysis
  


module.exports = router;