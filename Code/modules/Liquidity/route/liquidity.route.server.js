const express = require("express");
const router = express.Router();
const passport = require("passport");
const authorization = require("../../../config/authorization.config");
const liquidityCtrl = require("../controller/opiningBalance.controller");
const creditLineCtrl = require("../controller/creditLine.controller");
const liquidityAnalysisCtrl = require("../controller/liquidityAnalysis.controller");

//TODO: join separated end-points for optional params
//#region start balancing end-points
router
  .route("/:orgId/:prcId/openingBalance")
  .get(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    liquidityCtrl.getStartingBalance
  )
  .put(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    liquidityCtrl.updateStartingBalance
  );
//#endregion Start balancing


//#region Credit line end-points
router
  .route("/:orgId/:prcId/creditLine")
  .get(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    creditLineCtrl.getCreditLines
  )
  .put(
    passport.authenticate("jwt", {
      session: false,
    }),
    authorization.canDisplayAnalysis(),
    creditLineCtrl.saveCreditLine
  );
router.route("/:orgId/:prcId/creditLine/:id").delete(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  creditLineCtrl.deleteCreditLine
);
//#endregion Credit lines end-points


//#region Free liquidity analysis end-points
router.route("/:orgId/:prcId/liquidity/details/:accountNumber/specific/:selectedDate").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  liquidityAnalysisCtrl.getDetailsForSelectedDate
);

// details page with date filters
router.route("/:orgId/:prcId/liquidity/details/:accountNumber/:fromDate/:toDate").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  liquidityAnalysisCtrl.getAnalysisDetailsData
);

// liquididty analysis details page without date filters
router.route("/:orgId/:prcId/liquidity/details/:accountNumber").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  liquidityAnalysisCtrl.getAnalysisDetailsData
);

//main interface with filters
//TODO: baseBankBalance is depricated now we send
// it as zero and not used in the back, it will removed in the next code refactory
router.route("/:orgId/:prcId/liquidity/:fromDate/:toDate/:baseBankBalance").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  liquidityAnalysisCtrl.getAnalysisMainData
);

// main interface without filters
router.route("/:orgId/:prcId/liquidity").get(
  passport.authenticate("jwt", {
    session: false,
  }),
  authorization.canDisplayAnalysis(),
  liquidityAnalysisCtrl.getAnalysisMainData
);
//#endregion Free liquidity analysis end-points

module.exports = router;
