const env = require('../../../config/environment');
const orgRepo = require('../../../repositories/organisation.repo.server');
const sendMail = require('../../../config/mailer.config').sendMail;
const logger = require('../../../config/logger.config').logger;


module.exports.fetchAll = async function (req, res, next) {
    try {
        const orgs = await orgRepo
            .fetchAll();
        res
            .status(200)
            .json(orgs);
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


module.exports.fetchOne = async function (req, res) {
    try {
        const org = await orgRepo
            .fetchOne(req.params.id);
        res
            .status(200)
            .json(org);
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
        const file = req.file;
        const org = JSON.parse(req.body.data);
        if (file) {
            const filePath = file.path;
            org.logo = env.domain + filePath;
        }
        const result = await orgRepo
            .insert(org);
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
        const org = req.body;
        const result = await orgRepo
            .update(org, req.params.id);
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
        const result = await orgRepo
            .softDelete(req.params.id);
        res.status(204)
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