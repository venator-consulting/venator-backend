const express = require('express');
const router = express.Router();
const loginCtrl = require('../controller/login.controller.server');
const getDataCtrl = require("../controller/getPostingData.controller.server");
const userCtrl = require('../../Admin/controller/user.controller.server');
const procedureCtrl = require('../controller/procedure.controller.server');

router
    .route('/login')
    .post(loginCtrl.loginAuthenticate);

router
    .route('/users/:id/procedures')
    .get(procedureCtrl.getByOrgId);

router
    .route('/user/add')
    .post(userCtrl.register);

router
    .route('/users/:id')
    .get(userCtrl.getUsersByOrganisationId);

router
    .route('/resetPassword')
    .post(userCtrl.resetPass);

router
    .route('/posting')
    .get(getDataCtrl.fetch);

router
    .route('/export/:tableName/:OrganisationId/:ProcedureId')
    .get(getDataCtrl.exportAsExcel);

module.exports = router;