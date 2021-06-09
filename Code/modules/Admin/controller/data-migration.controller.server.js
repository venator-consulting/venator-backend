const sendMail = require('../../../config/mailer.config').sendMail;
const logger = require('../../../config/logger.config').logger;
const env = require('../../../config/environment');
const dictRepo = require('../../../repositories/dict.repository.server');

module.exports.buildDatabaseSchema = async function (req, res, next) {

    try {
        await require('../../../models/country.model.server').syncCountry();
        await require('../../../models/city.model.server').syncCity();
        await require('../../../models/street.model.server').syncStreet();
        await require('../../../models/organisation.model.server').syncOrganisation();
        await require('../../../models/procedures.model.server').syncProcedures();
        await require('../../../models/documentType.model.server').syncDocumentType();
        await require('../../../models/accountType.model.server').syncAccountType();
        // await require('../../../models/accounts.model.server').syncAccounts();
        await require('../../../models/role.model.server').syncRole();
        await require('../../../models/user.model.server').syncUser();
        // await require('../../../models/posting.model.server').syncPosting();

        res
            .status(200)
            .json('done');
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
                error: error.message,
            });
    }
};

module.exports.createDict = async (req, res) => {
    try {
        const result = await dictRepo.createDict();
        res.status(200).json({
            message: 'done'
        });
    } catch (error) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> data migration controller </h3 >
            <p> create dictionary tables </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${error} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${error}`);
        res
            .status(500)
            .json({
                error: error.message,
            });
    }
};