const express = require('express');
const router = express.Router();
const loginCtrl = require('../controller/login.controller.server');
const postngRepo = require("../../../repositories/posting.repo.server");
const getDataCtrl = require("../controller/getPostingData.controller.server");
router
    .route('/login')
    .post(loginCtrl.loginAuthenticate);

router
    .route('/getPostingData/:companyCode')
    .get( getDataCtrl.getData );

module.exports = router;