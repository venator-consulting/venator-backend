const express = require('express');
const router = express.Router();
const loginCtrl = require('../controller/login.controller.server');
const getDataCtrl = require("../controller/getPostingData.controller.server");
const userCtrl = require('../../Admin/controller/user.controller.server');

router
    .route('/login')
    .post(loginCtrl.loginAuthenticate);

router
    .route('/resetPassword')
    .post(userCtrl.resetPass);

router
    .route('/getPostingData/:companyCode/:offset')
    .get(getDataCtrl.getData);

router
    .route('/getLastPostingData/:companyCode')
    .get(getDataCtrl.getLastData);
router
    .route('/getLastDataPrevious/:companyCode/:startId/:endId')
    .get(getDataCtrl.getLastDataPrevious);

router
    .route('/getFirstFilteredData/:filterValue/:filterField/:offset')
    .get( getDataCtrl.getFirstFilteredData );

router
    .route('/getSecondFilteredData/:filterValue1/:filterField1/:filterValue2/:filterField2/:offset')
    .get(getDataCtrl.getSecondFilteredData);

module.exports = router;