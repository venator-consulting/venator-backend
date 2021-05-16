const procedureRepo = require('../../../repositories/procedure.repo.server');
const sendMail = require('../../../config/mailer.config').sendMail;
const logger = require('../../../config/logger.config').logger;
const env = require('../../../config/environment');


module.exports.fetchAll = async function (req, res, next) {
    try {
        const result = await procedureRepo
            .fetchAll();
        res
            .status(200)
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

module.exports.fetchOne = async (req, res) => {
    try {
        const result = await procedureRepo
            .fetchOne(req.params.id);
        res
            .status(200)
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



module.exports.getByOrgId = async (req, res) => {
    try {
        const result = await procedureRepo
            .getByOrgId(req.params.id);
        res.status(200)
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

module.exports.insert = async function (req, res) {
    try {
        const procedure = req.body;
        const result = await procedureRepo
            .insert(procedure);
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
        const procedure = req.body;
        const result = await procedureRepo
            .update(procedure, req.params.id);
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
        const result = await procedureRepo
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