const express = require('express');
const router = express.Router();
const uploadCtrl = require('../controller/admin-upload.controller.server');
const env = require('../../../config/environment');
const dataSyncCtrl = require('../controller/data-migration.controller.server');

const multer = require('multer');
const uploadfiles = multer({
    dest: env.uploadPath
});


router
    .route('/excel-header')
    .post(uploadfiles.single('excel'), uploadCtrl.getHeaderExcel);


router
    .route('/excel')
    .post(uploadfiles.single('excel'), uploadCtrl.uploadExcel);


router
    .route('/csv-header')
    .post(uploadfiles.single('excel'), uploadCtrl.getHeaderCsv)

router
    .route('/csv')
    .post(uploadfiles.single('excel'), uploadCtrl.uploadCsv);


router
    .route('/sync-db')
    .get(dataSyncCtrl.buildDatabaseSchema);


module.exports = router;