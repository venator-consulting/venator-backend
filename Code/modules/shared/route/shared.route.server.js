const express = require('express');
const router = express.Router();
const passport = require('passport');
const authorization = require('../../../config/authorization.config');
const loginCtrl = require('../controller/login.controller.server');
const getDataCtrl = require("../controller/getPostingData.controller.server");
const userCtrl = require('../../Admin/controller/user.controller.server');
const procedureCtrl = require('../controller/procedure.controller.server');

router
    .route('/login')
    .post(loginCtrl.loginAuthenticate);

router
    .route('/users/:id/procedures')
    .get(passport.authenticate('jwt', {
        session: false
    }), procedureCtrl.getByOrgId);

router
    .route('/user/add')
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Manager', 'Admin'), userCtrl.register);

router
    .route('/users/:id')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Manager', 'Admin'), userCtrl.getUsersByOrganisationId);

router
    .route('/resetPassword')
    .post(userCtrl.resetPass);

router
    .route('/posting')
    .get(passport.authenticate('jwt', {
        session: false
    }), getDataCtrl.fetch);

router
    .route('/export/:tableName/:OrganisationId/:ProcedureId')
    .get(passport.authenticate('jwt', {
        session: false
    }), getDataCtrl.exportAsExcel);

module.exports = router;