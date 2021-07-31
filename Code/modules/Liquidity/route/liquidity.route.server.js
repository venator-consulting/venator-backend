const express = require('express');
const router = express.Router();
const passport = require('passport');
const authorization = require('../../../config/authorization.config');
const liquidityCtrl = require('../controller/opiningBalance.controller');
const creditLineCtrl = require('../controller/creditLine.controller');
const liquidityAnalysisCtrl = require('../controller/liquidityAnalysis.controller');


router
    .route('/:orgId/:prcId/openingBalance')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), liquidityCtrl.getStartingBalance)
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), liquidityCtrl.updateStartingBalance);


router
    .route('/:orgId/:prcId/creditLine')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), creditLineCtrl.getCreditLines)
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), creditLineCtrl.saveCreditLine);
    router
    .route('/:orgId/:prcId/creditLine/:id')
    .delete(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), creditLineCtrl.deleteCreditLine);

router
    .route('/:orgId/:prcId/liquidity')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), liquidityAnalysisCtrl.getAnalysisMainData);


router
    .route('/:orgId/:prcId/liquidity/:accountNumber')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), liquidityAnalysisCtrl.getAnalysisDetailsData);

module.exports = router;