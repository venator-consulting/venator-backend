const express = require("express");
const router = express.Router();
const passport = require("passport");
const authorization = require("../../../config/authorization.config");
const analysisCtrl = require("../controller/analysis.controller.server");

router.route("/:orgId/:prcId/amount/:baseBalance").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.amountAnalysis
);

router
  .route("/:orgId/:prcId/amount/details/:accountNumber/:baseBalance")
  .get(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.amountAnalysisDetails
  )
  .put(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.amountBulkUpdate
  );

router.route("/:orgId/:prcId/amount/details-relevant/:accountNumber").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.amountJustRelevant
);

router.route("/:orgId/:prcId/details/:accountNumber").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.getByAccountNumber
);

router.route("/:orgId/:prcId/text").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.textAnalysis
);

router.route("/:orgId/:prcId/text-index").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.textAnalysisIndex
);

router.route("/:orgId/:prcId/text-word").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.textAnalysisByWord
);

router.route("/:orgId/:prcId/text-word-calc/date-range/:step").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.getTextAnalysisDateRangeOptionsByWord
);

router.route("/:orgId/:prcId/text-word-calc/:fromDate/:toDate").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.getTextAnalysisDataByWordCalc
);


router.route("/:orgId/:prcId/text-word-indexed").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.textAnalysisByWordIndexed
);

router.route("/:orgId/:prcId/text/details/:accountNumber/relevant").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.textJustRelevant
);

router.route("/:orgId/:prcId/text-word/details/:key").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.textAnalysisWordDetails
);

router
  .route("/:orgId/:prcId/text/details/:accountNumber")
  .get(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.textAnalysisDetails
  )
  .put(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.textBulkUpdate
  );

router.route("/:orgId/:prcId/payment").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.paymentAnalysis
);

router
  .route("/:orgId/:prcId/payment/details/:accountNumber")
  .get(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.paymentAnalysisDetails
  )
  .put(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.paymentBulkUpdate
  );

router.route("/:orgId/:prcId/payment/details-relevant/:accountNumber").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.paymentJustRelevant
);

router.route("/:orgId/:prcId/duedate").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.dueDateAnalysis
);

router.route("/:orgId/:prcId/duedate/details/:accountNumber").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.dueDateDetailsAnalysis
);

router.route("/:orgId/:prcId/credtor").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.creditorAnalysis
);

router.route("/:orgId/:prcId/credtor/details/:accountNumber").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  analysisCtrl.creditorAnalysisDetails
);

module.exports = router;
