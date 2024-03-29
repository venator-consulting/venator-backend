//#region imports
const express = require("express");
const router = express.Router();
const passport = require("passport");
const authorization = require("../../../config/authorization.config");
const analysisCtrl = require("../controller/analysis.controller.server");
//#endregion imports

//#region Amount analysis 
/**
 * @deprecated
 */
router
  .route("/:orgId/:prcId/amount/:baseBalance")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.amountAnalysis);

router
  .route("/:orgId/:prcId/amount-calc/:baseBalance/:mode?")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.amountAnalysisCalc);

router
  .route("/:orgId/:prcId/amount/details-chart/:accountNumber/:baseBalance/:mode")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.amountAnalysisDetailsChart)

router
  .route("/:orgId/:prcId/amount/details/:accountNumber/:baseBalance/:mode")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.amountAnalysisDetails)
  .put(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.amountBulkUpdate);

router
  .route("/:orgId/:prcId/amount/details-relevant/:accountNumber")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.amountJustRelevant
  );
//#endregion Amount

//#region Creditor
router
  .route("/:orgId/:prcId/credtor")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.creditorAnalysisCalc)
  // update priority
  .put(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.updateCreditorPriority);

router
  .route("/:orgId/:prcId/credtor/details/comment/:accountNumber")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.getCreditorComment)
  .put(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.updateCreditorComment);

router
  .route("/:orgId/:prcId/credtor/details/:accountNumber")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.creditorAnalysisDetails);
//#endregion Creditor

// to get details data for account number
// used in most analysis details interfaces
router
  .route("/:orgId/:prcId/details/:accountNumber")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.getByAccountNumber);

//#region Tetxt
/**
 * @deprecated
 */
router
  .route("/:orgId/:prcId/text")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.textAnalysis);

/**
* @deprecated
*/
router
  .route("/:orgId/:prcId/text-index")
  .get(passport.authenticate("jwt", { session: false }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.textAnalysisIndex);

/**
* @deprecated
*/
router.
  route("/:orgId/:prcId/text-word")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.textAnalysisByWord);

router
  .route("/:orgId/:prcId/text-word/account/:accountNumber")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.getTextAnalysisByWordForAccount);

router
  .route("/:orgId/:prcId/text-word-calc/date-range/:step")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.getTextAnalysisDateRangeOptionsByWord);

router
  .route("/:orgId/:prcId/text-word-calc/:fromDate/:toDate")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.getTextAnalysisDataByWordCalc);

router
  .route("/:orgId/:prcId/text-word-calc/")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.getTextAnalysisDataByWordCalcDefault);

router
  .route("/:orgId/:prcId/text-account-calc/")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.getTextAnalysisDataByAccountCalcDefault);

/**
 * @deprecated
 */
router
  .route("/:orgId/:prcId/text-word-indexed")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.textAnalysisByWordIndexed);

router
  .route("/:orgId/:prcId/text/details/:accountNumber/relevant")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.textJustRelevant);

router
  .route("/:orgId/:prcId/text-word/details/:key")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.textAnalysisWordDetails);

router
  .route("/:orgId/:prcId/text/details/:accountNumber")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.textAnalysisDetails)
  .put(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.textBulkUpdate);
//#endregion Text

//#region Payment
router
  .route("/:orgId/:prcId/payment/dateFilter/:toDate")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.paymentAnalysisDateFilter);


router
  .route("/:orgId/:prcId/payment/details/:accountNumber")
  .get(
    passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.paymentAnalysisDetails)
  .put(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.paymentBulkUpdate);

router
  .route("/:orgId/:prcId/payment/details-relevant/:accountNumber")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.paymentJustRelevant);

router
  .route("/:orgId/:prcId/payment/:fromDate/:toDate")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.paymentAnalysis);

router
  .route("/:orgId/:prcId/payment-liquidity/:fromDate/:toDate")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.paymentAnalysisForLiquidity);
//#endregion Payment

//#region Due date
// get top delayed table data (with pagination without filtering nor sorting) 
router
  .route("/:orgId/:prcId/duedate/top-delayed")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.topDelayedAccounts);

// to get specific account data for the bottom table
router
  .route("/:orgId/:prcId/duedate/details/:accountNumber/:fromDate?/:toDate?/:maxDelay?")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.dueDateDetailsAnalysis);

//get acatter chart data
router
  .route("/:orgId/:prcId/duedate/:fromDate?/:toDate?")
  .get(passport.authenticate("jwt", { session: false, }),
    authorization.canDisplayAnalysis(),
    analysisCtrl.dueDateAnalysis);
//#endregion Due Date


module.exports = router;
