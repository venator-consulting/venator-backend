const Website = require("../models/website.model");
const services = require('../models/servicesItem.model.server');
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

//#region services
module.exports.getServicesItems = async function () {
    return await services.getServicesItem().findAll({ order: [['order']] });
}

module.exports.saveServicesItem = async function (data) {
    return await services.getServicesItem().upsert(data);
}

module.exports.deleteServicesItem = async function (id) {
    return await services.getServicesItem().destroy({
        where: {
            id: id
        }
    });
}
//#endregion services

//#region About
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
//#endregion About

//#region Social Links
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
//#endregion Social links

module.exports.update = async function (data) {
    return await Website.getWebsite().upsert(data);
};


