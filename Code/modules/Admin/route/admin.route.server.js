const express = require('express');
const router = express.Router();
const uploadCtrl = require('../controller/admin-upload.controller.server');
const env = require('../../../config/environment');
const dataSyncCtrl = require('../controller/data-migration.controller.server');
const roleCtrl = require('../controller/roles.controller.server');
const userCtrl = require('../controller/user.controller.server');
const passport = require('passport');
const authorization = require('../../../config/authorization.config');

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
    .route('/user')
    .post(userCtrl.register);
    
router
    .route('/getManagers/:managerRoleId')
    .get(userCtrl.fetchAllManagers);

router
    .route('/roles/getmanagerRoleId') 
    .get(roleCtrl.getmanagerRoleId);

router
    .route('/reset')
    .post(userCtrl.resetPass);

router
    .route('/roles')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('ADMIN'), roleCtrl.fetchAll)
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('ADMIN'), roleCtrl.insert)

router
    .route('/roles/:id')
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('ADMIN'), roleCtrl.update)
    .delete(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('ADMIN'), roleCtrl.delete)


router
    .route('/sync-db')
    .get(dataSyncCtrl.buildDatabaseSchema);

router
    .route('/create-admin')
    .get(userCtrl.createDefaultAdmin)


module.exports = router;