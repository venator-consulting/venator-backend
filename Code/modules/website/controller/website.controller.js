const _sendMail = require("../../../config/mailer.config").sendMail;
const model = require('../../../models/website.model');
const env = require('../../../config/environment');
const repo = require('../../../repositories/website.repo.server');

module.exports.get = async (req, res) => {
    const result = await repo.fetchAll();
    res.status(200).json(result);
};

module.exports.sendMail = async (req, res) => {
    const mail = req.body;
    const data = await model.getWebsite().findAll();
    const ourMail = data[0]?.email ?? env.developerMail;
    //TODO: get the mail from the DB.
    await _sendMail({
        from: mail?.email,
        to: ourMail,
        subject: mail?.subject,
        html: ` 
          <div>
          <h3> ${mail?.subject} </h3 >
          <h3> from: ${mail?.name} - ${mail?.phone}: </h3 >
          <p> -----------------------------------------------------</p>
          <p> ${mail?.message} </p>
          </div>`,
    });
    res.status(200).json('OK');
};