const Posting = require('../models/posting.model.server');
const {
    Op
} = require("sequelize");

module.exports.fetchAll = function (companyCode, offset) {
    return new Promise(async (resolve, reject) => {
        try {
            const postings = await Posting
                .getPosting()
                .findAll({
                    where: {
                        companyCode: companyCode
                    },
                    offset: offset,
                    limit: 10,
                    order: [
                        ['id', 'ASC'],
                    ]
                });
            resolve(postings);
        } catch (err) {
            reject(err);
        }
    });

}; 
module.exports.fetchLastData = function (companyCode) {
    return new Promise(async (resolve, reject) => {
        try {
            const postings = await Posting
                .getPosting()
                .findAndCountAll({
                    where: {
                        companyCode: companyCode
                    },
                   // offset: offset,
                    limit: 10,
                    order: [
                        ['id', 'DESC'],
                    ]
                })
                .then(result => {
                    console.log(result.count);
                    let data = {rows: result.rows, count: result.count}
                    resolve(data);
                  });

        } catch (err) {
            reject(err);
        }
    });

};
module.exports.fetchLastDataPrevious = function (companyCode, startId, endId) {
    return new Promise(async (resolve, reject) => {
        try {
            const postings = await Posting
                .getPosting()
                .findAll({
                    where: {
                        companyCode: companyCode,
                        id :  {[Op.between]: [startId, endId]}
                    },
                   // offset: offset,
                    limit: 10,
                    order: [
                        ['id', 'DESC'],
                    ]
                });
            resolve(postings);
            console.log(postings)
        } catch (err) {
            reject(err);
        }
    });

};

module.exports.fetchFirstFilteredData = function (filterValue, filterField, offset) {
    const criteria = {};
    criteria[filterField] = filterValue;
    return new Promise(async (resolve, reject) => {
        try {
            const postings = await Posting
                .getPosting()
                .findAndCountAll({
                    where: criteria,
                    offset: offset,
                    limit: 10,
                })
                .then(result => {
                    let data = {rows: result.rows, count: result.count}
                    resolve(data);
                  });

        } catch (err) {
            reject(err);
        }
    });

};

module.exports.fetchSecondFilteredData = function (filterValue1, filterField1,filterValue2, filterField2, offset) {


    const criteria = {};
    criteria[filterField1] = filterValue1;
    criteria[filterField2] = filterValue2;

    return new Promise(async (resolve, reject) => {
        try {
            const postings = await Posting
                .getPosting()
                .findAndCountAll({
                    where: criteria,
                    offset: offset,
                    limit: 10,
                    order: [
                        ['id', 'DESC'],
                    ]
                })
                .then(result => {
                    let data = {rows: result.rows, count: result.count}
                    resolve(data);
                  });
            console.log(offset)
            console.log(postings[0].documentNumber)
        } catch (err) {
            reject(err);
        }
    });

};

