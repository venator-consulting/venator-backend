const express = require('express');
const router = express.Router();
const controller = require('../controller/website.controller');

router
    .route('/mail')
    .post(controller.sendMail);

module.exports = router;