const sendMail = require('../config/mailer.config').sendMail;
const logger = require('../config/logger.config').logger;
const env = require('../config/environment');


module.exports.errorHandler = async (title, error) => {
    await sendMail({
        from: 'Venator, Bug reporting',
        to: env.developerMail,
        subject: 'exception stack trace',
        html: ` 
        <div>
        <h3> ${title} </h3 >
        <p> -----------------------------------------------------</p>
        <p> ${error} </p>
        </div>`,
    });
    logger.error(`${new Date()}: ${error}`);
};