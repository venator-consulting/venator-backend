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
const websiteCtrl = require('../controller/website.controller.server');

const multer = require('multer');
const uploadfiles = multer({
    dest: env.uploadPath
});

const publicImgs = multer({
    dest: env.publicImgsPath
});

//#region website managment
router
    .route('/website/')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), websiteCtrl.get)
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), websiteCtrl.update);

router
    .route('/website/slider')
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), publicImgs.array('photos', 3), websiteCtrl.updateSlider);

router
    .route('/website/about')
    .put(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), publicImgs.single('photos'), websiteCtrl.updateAbout);

router
    .route('/website/servicesItem/:id')
    .delete(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), websiteCtrl.deleteServicesItem);

router
    .route('/website/servicesItem')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), websiteCtrl.getServicesItems)
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), publicImgs.single('photos'), websiteCtrl.updateServicesItem);

router
    .route('/website/aboutItem/:id')
    .delete(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), websiteCtrl.deleteAboutItem);

router
    .route('/website/aboutItem')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), websiteCtrl.getAboutItems)
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), websiteCtrl.updateAboutItem);

router
    .route('/website/social/:id')
    .delete(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), websiteCtrl.deleteSocialLink);

router
    .route('/website/social')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), websiteCtrl.getSocialLinks)
    .post(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), websiteCtrl.saveSocialLinks);
//#endregion website management

//#region import
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
//#endregion import


//#region Precalculate
router
    .route('/precalculate/text-by-word/:orgId/:prcId')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), precalcCtrl.textAnalysisByWord);

router
    .route('/precalculate/text-by-account/:orgId/:prcId')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), precalcCtrl.textAnalysisByAccount);

router
    .route('/precalculate/amount/:orgId/:prcId')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), precalcCtrl.amountAnalysis);

router
    .route('/precalculate/creditor/:orgId/:prcId')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), precalcCtrl.creditorAnalysis);

router
    .route('/precalculate/payment/:orgId/:prcId')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), precalcCtrl.paymentAnalysis);


router
    .route('/precalculate/due-date/:orgId/:prcId')
    .get(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), precalcCtrl.dueDateAnalysis);
//#endregion Precalculate


//#region users
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
//#endregion users


//#region Procedures
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
    .route('/procedures/:orgId/:prcId')
    .delete(passport.authenticate('jwt', {
        session: false
    }), authorization.authorize('Admin'), procedureCtrl.reset)
//#endregion Procedures


//#region Organization
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
//#endregion Organization


//#region document type 
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
//#endregion document type


//#region account type 
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
    }), authorization.authorize('Admin'), accountTypeCtrl.getAll);
//#endregion Account type


//#region init data
router
    .route('/sync-db')
    .get(dataSyncCtrl.buildDatabaseSchema);

router
    .route('/create-admin')
    .get(userCtrl.createDefaultAdmin);

router
    .route('/dict')
    .get(dataSyncCtrl.createDict);
//#endregion init data

module.exports = router;