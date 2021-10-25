const express = require('express');
const router = express.Router();
const controller = require('../controller/website.controller');

router
    .route('/mail')
    .post(controller.sendMail);

router
    .route('/data')
    .get(controller.get);

module.exports = router;