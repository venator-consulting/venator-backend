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

router.route("/:orgId/:prcId/creditors-mails")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    controller.getCreditorsMails)
  .put(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    controller.updateMail);

//#region mail analysis

router.route("/:orgId/:prcId/download/:id/attachments").get(passport.authenticate("jwt", {
  session: false,
}),
  authorization.canDisplayAnalysis(),
  controller.downloadAttachment);

router.route("/:orgId/:prcId/details/:id/attachments").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  controller.getAttachments);


router.route("/:orgId/:prcId/details/:mail").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  controller.getBySender
);

router.route("/:orgId/:prcId/details-account/:accountNumber").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  controller.getBySenderByAccount
);

router.route("/:orgId/:prcId/mail-analysis/sender").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  controller.getMailAnalysisBySender
);

router.route("/:orgId/:prcId/mail-analysis/sender-account/:accountNumber").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  controller.getMailDetailsAnalysisBySenderAccount
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

router.route("/:orgId/:prcId/mail-analysis/details-account/:accountNumber/relevant").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  controller.mailJustRelevantByAccount
);
//#endregion mail analysis



module.exports = router;