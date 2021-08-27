const express = require('express');
const router = express.Router();
const uploadCtrl = require('../controller/admin-upload.controller.server');
const env = require('../../../config/environment');
const dataSyncCtrl = require('../controller/data-migration.controller.server');
const roleCtrl = require('../controller/roles.controller.server');
const userCtrl = require('../controller/user.controller.server');
const passport = require('passport');
const authorization = require('../../../config/authorization.config');
const procedureCtrl = require('../controller/procedure.controller.server');
const organisationCtrl = require('../controller/organisation.controller.server');
const docTypeCtrl = require('../controller/documentType.controller.server');
const postingCtrl = require('../controller/posting.controller.server');
const accountTypeCtrl = require('../controller/accountType.controler.server');
const precalcCtrl = require('../controller/precalculated.controller.server');

const multer = require('multer');
const uploadfiles = multer({
    dest: env.uploadPath
});

const publicImgs = multer({
    dest: env.publicImgsPath
});

router
    .route('/template-types')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), uploadCtrl.getTemplateTypes);


router
    .route('/header')
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), uploadfiles.single('excel'), uploadCtrl.headerFile);


router
    .route('/import')
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), uploadCtrl.importFile);


router
    .route('/delete-file')
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), uploadCtrl.deleteFileFromServier);

router
    .route('/precalculate/:orgId/:prcId/:step')
    .get(precalcCtrl.textAnalysisByWord);

router
    .route('/user')
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), userCtrl.register);

router
    .route('/getManagers')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), userCtrl.fetchAllManagers);

router
    .route('/roles/getmanagerRoleId')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), roleCtrl.getmanagerRoleId);

router
    .route('/reset')
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), userCtrl.resetPass);

router
    .route('/roles')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), roleCtrl.fetchAll)
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), roleCtrl.insert)

router
    .route('/roles/:id')
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), roleCtrl.update)
    .delete(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), roleCtrl.delete);

// router
//     .route('/users/:id/procedures')
//     .get(procedureCtrl.getByUserId);

router
    .route('/procedures')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), procedureCtrl.fetchAll)
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), procedureCtrl.insert);


router
    .route('/procedures/:id')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), procedureCtrl.fetchOne)
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), procedureCtrl.update)
    .delete(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), procedureCtrl.delete);

router
    .route('/organisation')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), organisationCtrl.fetchAll)
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), publicImgs.single('logo'), organisationCtrl.insert);

router
    .route('/organisation/:id')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), organisationCtrl.fetchOne)
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), publicImgs.single('logo'), organisationCtrl.update)
    .delete(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), organisationCtrl.delete);

router
    .route('/organisation/:id/procedures')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), procedureCtrl.getByOrgId);

router
    .route('/document-type/posting/:orgId/:prcdrId')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), postingCtrl.getDocTypes)
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), postingCtrl.updateDoctypes);


router
    .route('/document-type')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), docTypeCtrl.getAll);


router
    .route('/account-type/posting/:orgId/:prcId')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), accountTypeCtrl.getAccountTypes)
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), accountTypeCtrl.updateAccountTypes);


router
    .route('/account-type')
    .get(passport.authenticate('jwt', {
        session: false
    }),authorization.authorize('Admin'), accountTypeCtrl.getAll);


router
    .route('/sync-db')
    .get(dataSyncCtrl.buildDatabaseSchema);

router
    .route('/create-admin')
    .get(userCtrl.createDefaultAdmin);

router
    .route('/dict')
    .get(dataSyncCtrl.createDict);


module.exports = router;