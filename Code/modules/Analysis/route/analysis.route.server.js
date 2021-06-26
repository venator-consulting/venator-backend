const express = require('express');
const router = express.Router();
const passport = require('passport');
const authorization = require('../../../config/authorization.config');
const analysisCtrl = require('../controller/analysis.controller.server');

router
    .route('/:orgId/:prcId/amount/:baseBalance')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), analysisCtrl.amountAnalysis);

router
    .route('/:orgId/:prcId/amount/details/:accountNumber/:baseBalance')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), analysisCtrl.amountAnalysisDetails)
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), analysisCtrl.amountBulkUpdate);


router
    .route('/:orgId/:prcId/amount/details-relevant/:accountNumber')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), analysisCtrl.amountJustRelevant);

router
    .route('/:orgId/:prcId/details/:accountNumber')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), analysisCtrl.getByAccountNumber);


router
    .route('/:orgId/:prcId/text')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), analysisCtrl.textAnalysis);


router
    .route('/:orgId/:prcId/text/details/:accountNumber/relevant')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), analysisCtrl.textJustRelevant);


router
    .route('/:orgId/:prcId/text/details/:accountNumber')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), analysisCtrl.textAnalysisDetails)
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), analysisCtrl.textBulkUpdate);

router
    .route('/:orgId/:prcId/payment')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), analysisCtrl.paymentAnalysis);

module.exports = router;