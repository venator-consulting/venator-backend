const express = require('express');
const router = express.Router();
const passport = require('passport');
const authorization = require('../../../config/authorization.config');
const liquidityCtrl = require('../controller/opiningBalance.controller');


router
    .route('/:orgId/:prcId/openingBalance')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), liquidityCtrl.getStartingBalance)
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.canDisplayAnalysis(), liquidityCtrl.updateStartingBalance);




module.exports = router;