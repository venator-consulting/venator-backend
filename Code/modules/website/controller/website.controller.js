const _sendMail = require("../../../config/mailer.config").sendMail;
const model = require('../../../models/website.model');
const env = require('../../../config/environment');
const repo = require('../../../repositories/website.repo.server');

module.exports.get = async (req, res) => {
    const fields = req.query;
    const result = await repo.fetch(fields);
    res.status(200).json(result);
};

module.exports.getCover = async (req, res) => {
    const fields = ['id', 'sliderImg1', 'sliderImg2', 'sliderImg3', 'sliderTitle1', 'sliderTitle2', 'sliderTitle3', 'sliderSubTitle1', 'sliderSubTitle2', 'sliderSubTitle3'];
    const result = await repo.fetch(fields);
    res.status(200).json(result);
}

module.exports.getSocialLinks = async (req, res) => {
    const result = await repo.getSocialLinks();
    res.status(200).json(result);
};

module.exports.getAboutItems = async (req, res) => {
    const result = await repo.getAboutItems();
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