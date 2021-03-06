const express = require('express');
const router = express.Router();
const passport = require('passport');
const authorization = require('../../../config/authorization.config');
const loginCtrl = require('../controller/login.controller.server');
const getDataCtrl = require("../controller/getPostingData.controller.server");
const userCtrl = require('../../Admin/controller/user.controller.server');
const procedureCtrl = require('../controller/procedure.controller.server');
const dictCtrl = require('../controller/dictionary.controller.server');

router
    .route('/login')
    .post(loginCtrl.loginAuthenticate);

router
    .route('/procedure/:prcId')
    .get(passport.authenticate('jwt', {
        session: false
    }), procedureCtrl.getById);


router
    .route('/users/:id/procedures')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.belongToOrganisation(), procedureCtrl.getByOrgId);

router
    .route('/user/add')
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Manager', 'Admin'), userCtrl.register);

router
    .route('/user/edit')
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Manager', 'Admin'), userCtrl.edit);

router
    .route('/users/:id')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Manager', 'Admin'), authorization.belongToOrganisation(), userCtrl.getUsersByOrganisationId);

router
    .route('/resetPassword')
    .post(userCtrl.resetPass);

router
    .route('/profile/resetPassword')
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.extractUserInfo(), userCtrl.changePassword);

router
    .route('/posting')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.belongToOrganisation(), getDataCtrl.fetch);

router
    .route('/export/:tableName/:OrganisationId/:ProcedureId')
    .get(passport.authenticate('jwt', {
        session: false
    }), getDataCtrl.exportAsExcel);

router
    .route('/susa/defaultDate/:orgId/:prcId')
    .get(passport.authenticate('jwt', {
        session: false
    }), getDataCtrl.susaDateRange);

router
    .route('/susa/:orgId/:prcId')
    .get(passport.authenticate('jwt', {
        session: false
    }), getDataCtrl.susaAnalysis);


router
    .route('/susa/:orgId/:prcId/:fromDate/:toDate')
    .get(passport.authenticate('jwt', {
        session: false
    }), getDataCtrl.susaAnalysis);

router
    .route('/complete/:word')
    .get(passport.authenticate('jwt', {
        session: false
    }), dictCtrl.fetch);

module.exports = router;