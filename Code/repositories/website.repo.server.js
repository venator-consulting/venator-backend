const Website = require("../models/website.model");
const Social = require('../models/socialLinks.model.server');
const about = require('../models/aboutItem.model.server');

module.exports.fetchAll = async function () {
    const result = await Website.getWebsite().findAll();
    return result[0];
};

/**
 * 
 * @param {String[]} fields selected fields to be projected 
 * @returns 
 */
module.exports.fetch = async function (fields) {
    fields = Object.values(fields);
    const result = await Website.getWebsite().findAll({ attributes: fields });
    return result[0];
}

module.exports.getAboutItems = async function () {
    return await about.getAboutItem().findAll({ order: [['order']] });
}

module.exports.saveAboutItem = async function (data) {
    return await about.getAboutItem().upsert(data);
}

module.exports.deleteAboutItem = async function (id) {
    return await about.getAboutItem().destroy({
        where: {
            id: id
        }
    });
}

module.exports.getSocialLinks = async function () {
    return await Social.getSocialLinks().findAll({ order: [['order']] });
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


