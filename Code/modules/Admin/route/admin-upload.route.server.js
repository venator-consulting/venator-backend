const express = require('express');
const router = express.Router();
const uploadCtrl = require('../controller/admin-upload.controller.server');
const env = require('../../../config/environment');
const dataSyncCtrl = require('../controller/data-migration.controller.server');
const roleCtrl = require('../controller/roles.controller.server');
const userCtrl = require('../controller/user.controller.server');

const multer = require('multer');
const uploadfiles = multer({
    dest: env.uploadPath
});

router
    .route('/template-types')
    .get(uploadCtrl.getTemplateTypes);


router
    .route('/header')
    .post(uploadfiles.single('excel'), uploadCtrl.headerFile);


router
    .route('/import')
    .post(uploadCtrl.importFile);


router
    .route('/roles')
    .get(roleCtrl.fetchAll)


router
    .route('/sync-db')
    .get(dataSyncCtrl.buildDatabaseSchema);

router
    .route('/create-admin')
    .get(userCtrl.createDefaultAdmin)


module.exports = router;