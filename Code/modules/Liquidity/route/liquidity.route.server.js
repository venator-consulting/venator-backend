const express = require('express');
const router = express.Router();
const passport = require('passport');
const authorization = require('../../../config/authorization.config');
const liquidityCtrl = require('../controller/opiningBalance.controller');
const creditLineCtrl = require('../controller/creditLine.controller');


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



module.exports = router;