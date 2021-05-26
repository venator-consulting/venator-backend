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


module.exports = router;