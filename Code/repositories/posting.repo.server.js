const Posting = require('../models/posting.model.server');
const {
    Op
} = require("sequelize");

module.exports.fetchAll = function (companyCode, offset, limit) {
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
module.exports.fetchLastData = function (companyCode, limit) {
    return new Promise(async (resolve, reject) => {
        try {
            const postings = await Posting
                .getPosting()
                .findAndCountAll({
                    where: {
                        companyCode: companyCode
                    },
                   // offset: offset,
                    limit: limit,
                    order: [
                        ['id', 'DESC'],
                    ]
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
module.exports.fetchLastDataPrevious = function (companyCode, startId, endId, limit) {
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
                    limit: limit,
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

module.exports.fetchFirstFilteredData = function (filterValue, filterField, offset, limit) {
    const criteria = {};
    criteria[filterField] = filterValue;
    return new Promise(async (resolve, reject) => {
        try {
            const postings = await Posting
                .getPosting()
                .findAndCountAll({
                    where: criteria,
                    offset: offset,
                    limit: limit,
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

module.exports.fetchSecondFilteredData =  function (filterValue1, filterField1,filterValue2, filterField2, offset, limit) {


    const criteria = {};
    criteria[filterField1] = filterValue1;
    criteria[filterField2] = filterValue2;

    return new Promise(async (resolve, reject) => {
        try {
            console.log(criteria)
            const postings = await Posting
                .getPosting()
                .findAndCountAll({
                    where: criteria,
                    offset: offset,
                    limit: limit,

                })
                .then(result => {
                    let data = {rows: result.rows, count: result.count}
                    resolve(data);
                  });

        } catch (err) {
            throw new Error('there_is_an_error_in_db_connection');
        }
    });

};

module.exports.fetchThirdFilteredData =  function (filterValue1, filterField1,filterValue2, filterField2, filterValue3, filterField3, offset, limit) {


    const criteria = {};
    criteria[filterField1] = filterValue1;
    criteria[filterField2] = filterValue2;
    criteria[filterField3] = filterValue3;

    return new Promise(async (resolve, reject) => {
        try {
            console.log(criteria)
            const postings = await Posting
                .getPosting()
                .findAndCountAll({
                    where: criteria,
                    offset: offset,
                    limit: limit,

                })
                .then(result => {
                    let data = {rows: result.rows, count: result.count}
                    resolve(data);
                  });

        } catch (err) {
            throw new Error('there_is_an_error_in_db_connection');
        }
    });

};

module.exports.fetchFirthFilteredData =  function (filterValue1, filterField1,filterValue2, filterField2, filterValue3, filterField3, filterValue4, filterField4, offset, limit) {


    const criteria = {};
    criteria[filterField1] = filterValue1;
    criteria[filterField2] = filterValue2;
    criteria[filterField3] = filterValue3;
    criteria[filterField4] = filterValue4;

    return new Promise(async (resolve, reject) => {
        try {
            console.log(criteria)
            const postings = await Posting
                .getPosting()
                .findAndCountAll({
                    where: criteria,
                    offset: offset,
                    limit: limit,

                })
                .then(result => {
                    let data = {rows: result.rows, count: result.count}
                    resolve(data);
                  });

        } catch (err) {
            throw new Error('there_is_an_error_in_db_connection');
        }
    });

};

module.exports.fetchFifthFilteredData =  function (filterValue1, filterField1,filterValue2, filterField2, filterValue3, filterField3, filterValue4, filterField4, filterValue5, filterField5, offset, limit) {


    const criteria = {};
    criteria[filterField1] = filterValue1;
    criteria[filterField2] = filterValue2;
    criteria[filterField3] = filterValue3;
    criteria[filterField4] = filterValue4;
    criteria[filterField5] = filterValue5;

    return new Promise(async (resolve, reject) => {
        try {
            console.log(criteria)
            const postings = await Posting
                .getPosting()
                .findAndCountAll({
                    where: criteria,
                    offset: offset,
                    limit: limit,

                })
                .then(result => {
                    let data = {rows: result.rows, count: result.count}
                    resolve(data);
                  });

        } catch (err) {
            throw new Error('there_is_an_error_in_db_connection');
        }
    });

};