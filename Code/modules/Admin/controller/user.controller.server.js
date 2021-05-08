const roleRepo = require('../../../repositories/role.repo.server');
const userRepo = require('../../../repositories/user.repo.server');
const sendMail = require('../../../config/mailer.config').sendMail;
const logger = require('../../../config/logger.config').logger;
const env = require('../../../config/environment');


module.exports.createDefaultAdmin = async (req, res) => {
    try {
        const defaultRole = await roleRepo.createDefaultAdminRole();
        const adminUser = await userRepo.createDefaultAdmin(defaultRole);
        res
            .status(200)
            .json(adminUser);
    } catch (e) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> data migration controller </h3 >
            <p> sync database tables </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${e} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${e}`);
        res
            .status(500)
            .json(e);
    }

};

module.exports.register = async (req, res) => {
    try {
        const user = await userRepo.insert(req.body);
        res.status(201).json(user);
    } catch (error) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> data migration controller </h3 >
            <p> sync database tables </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${error} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${error}`);
        res.status(500).json(error);
    }
};

module.exports.resetPass = async (req, res) => {
    try {
        const user = await userRepo.resetPassword(req.body);
        res.status(201).json(user);
    } catch (error) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> data migration controller </h3 >
            <p> sync database tables </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${error} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${error}`);
        res.status(500).json(error);
    }
};

module.exports.fetchAllManagers = async function (req, res) {

    try {
        const managers = await userRepo.fetchAllManagers();
        res.status(200).json(managers);
    } catch (error) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> data migration controller </h3 >
            <p> sync database tables </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${error} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${error}`);
        res.status(500).json(error);
    }
};


module.exports.getUsersByOrganisationId = async function (req, res, next) {
    try {
        organisationId = req.params.id;
        const users = await userRepo.getUsersByOrganisationId(organisationId);
        res.status(200).json(users);
    } catch (error) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> data migration controller </h3 >
            <p> sync database tables </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${error} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${error}`);
        res.status(500).json(error);
    }
};