const Website = require("../models/website.model");
const Social = require('../models/socialLinks.model.server');

module.exports.fetchAll = async function () {
    const result = await Website.getWebsite().findAll();
    return result[0];
};


module.exports.getSocialLinks = async function () {
    return await Social.getSocialLinks().findAll({
        order: [['order']]
    });
}

module.exports.saveSocialLinks = async function (data) {
    return await Social.getSocialLinks().upsert(data);
}


module.exports.deleteSocialLink = async function (id) {
    return await Social.getSocialLinks().destroy({
        where: {
            id: id
        }
    });
}


module.exports.update = async function (data) {
    return await Website.getWebsite().upsert(data);
};


