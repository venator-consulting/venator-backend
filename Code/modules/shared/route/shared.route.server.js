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
    .route('/getPostingData/:companyCode/:offset/:limit')
    .get(getDataCtrl.getData);

router
    .route('/getLastPostingData/:companyCode/:limit')
    .get(getDataCtrl.getLastData);
router
    .route('/getLastDataPrevious/:companyCode/:startId/:endId/:limit')
    .get(getDataCtrl.getLastDataPrevious);

router
    .route('/getFirstFilteredData/:filterValue/:filterField/:offset/:limit')
    .get( getDataCtrl.getFirstFilteredData );

router
    .route('/getSecondFilteredData/:filterValue1/:filterField1/:filterValue2/:filterField2/:offset/:limit')
    .get(getDataCtrl.getSecondFilteredData);

router
    .route('/getThirdFilteredData/:filterValue1/:filterField1/:filterValue2/:filterField2/:filterValue3/:filterField3/:offset/:limit')
    .get(getDataCtrl.getThirdFilteredData);
    
router
    .route('/getFirthFilteredData/:filterValue1/:filterField1/:filterValue2/:filterField2/:filterValue3/:filterField3/:filterValue4/:filterField4/:offset/:limit')
    .get(getDataCtrl.getFirthFilteredData);

router
    .route('/getFifthFilteredData/:filterValue1/:filterField1/:filterValue2/:filterField2/:filterValue3/:filterField3/:filterValue4/:filterField4/:filterValue5/:filterField5/:offset/:limit')
    .get(getDataCtrl.getFifthFilteredData);
module.exports = router;