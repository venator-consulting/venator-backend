const roleRepo = require('../../../repositories/role.repo.server');
const sendMail = require('../../../config/mailer.config').sendMail;
const logger = require('../../../config/logger.config').logger;
const env = require('../../../config/environment');


module.exports.fetchAll = async function (req, res, next) {
    try {
        const roles = await roleRepo
            .fetchAll();
        res
            .status(200)
            .json(roles);
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
        res
            .status(500)
            .json({
                error: error
            });
    }
};

module.exports.getmanagerRoleId = async function (req, res, next) {

    try {
        const roles =  roleRepo.getmanagerRoleId()
        .then(result=> {
            return res.send({
                id: result.id
            });
        })
          
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
        res
            .status(500)
            .json({
                error: error
            });
    }
};


module.exports.insert = async function (req, res) {
    try {
        const role = {
            name: req.body.name,
            role_description: req.body.role_description
        };
        const result = await roleRepo
            .insert(role);
        res.status(201)
            .json(result);
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
        res
            .status(500)
            .json({
                error: error
            });
    }
};

module.exports.update = async function (req, res) {
    try {
        const role = {
            name: req.body.name,
            role_description: req.body.role_description
        };
        const result = await roleRepo
            .update(role, req.params.id);
        res.status(201)
            .json(result);
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
        res
            .status(500)
            .json({
                error: error
            });
    }
};

module.exports.delete = async function (req, res) {
    try {
        const result = await roleRepo
            .delete(req.params.id);
        res.status(204)
            .json(result);
    } catch (error) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> Roles controller </h3 >
            <p> Delete roles </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${error} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${error}`);
        res
            .status(500)
            .json({
                error: error
            });
    }
};

module.exports.createDefaultRoles = async function (req, res) {
    try {
        const result = await roleRepo
            .createDefaultRoles();
        res.status(201)
            .json(result);
    } catch (error) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> Roles controller </h3 >
            <p> Create default Roles </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${error} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${error}`);
        res
            .status(500)
            .json({
                error: error
            });
    }
};