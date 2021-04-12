const Posting = require('../models/posting.model.server');
const {
    Op
} = require("sequelize");

module.exports.fetchAll = function (companyCode, limit = 10, offset = 0) {
    return new Promise(async (resolve, reject) => {
        try {
            const postings = await Posting
                .getPosting()
                .findAll({
                    where: {
                        companyCode: companyCode
                    },
                    offset: offset,
                    limit: limit,
                });
            resolve(postings);
            //console.log(postings)
        } catch (err) {
            reject(err);
        }
    });
    
};




