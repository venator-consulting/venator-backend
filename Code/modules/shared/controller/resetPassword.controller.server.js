const nodemailer = require('nodemailer');



module.exports.resetPassword = function (req, res, next) {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
           user: process.env.EMAIL_USER,
           pass: process.env.EMAIL_PASS
        }
    });
};