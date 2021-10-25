const Website = require("../models/website.model");

module.exports.fetchAll = async function () {
    const result = await Website.getWebsite().findAll();
    return result[0];
};


module.exports.update = async function (data) {
      return await Website.getWebsite().upsert(data);
}; // end of update

