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

router.route("/:orgId/:prcId/details/:mail").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  controller.getBySender
);

router.route("/:orgId/:prcId/mail-analysis/sender").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  controller.getMailAnalysisBySender
);

router.route("/:orgId/:prcId/mail-analysis/word").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  controller.getMailAnalysisByWord
);

router.route("/:orgId/:prcId/mail-analysis/sender/:mail")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    controller.getMailDetailsAnalysisBySender)
  .put(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    controller.mailBulkUpdate);

router.route("/:orgId/:prcId/mail-analysis/word/:word").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  controller.getMailDetailsAnalysisByWoed
);

router.route("/:orgId/:prcId/mail-analysis/details/:mail/relevant").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  controller.mailJustRelevant
);
//#endregion mail analysis



module.exports = router;