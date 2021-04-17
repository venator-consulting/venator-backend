
const postngRepo = require("../../../repositories/posting.repo.server")


module.exports.getData = function (req, res, next) {
        companyCode = req.params.companyCode
        offset      = parseInt(req.params.offset)
        postngRepo.fetchAll(companyCode, offset)
        .then(result=> {
            return res.send({
                results: result
            });
        })

    
};

module.exports.getLastData = function (req, res, next) {
    companyCode = req.params.companyCode

    postngRepo.fetchLastData(companyCode)
    .then(result=> {
        return res.send({
            rows: result.rows,
            count: result.count
        });
    })


};
module.exports.getLastDataPrevious = function (req, res, next) {
    companyCode = req.params.companyCode
    startId = req.params.startId
    endId = req.params.endId
    console.log(startId, endId)

    postngRepo.fetchLastDataPrevious(companyCode, startId, endId)
    .then(result=> {
        return res.send({
            results: result
        });
    })


};

module.exports.getFirstFilteredData = function (req, res, next) {
    filterValue = req.params.filterValue
    filterField = req.params.filterField
    offset      = parseInt(req.params.offset)
    postngRepo.fetchFirstFilteredData(filterValue, filterField, offset)
    .then(result=> {
        return res.send({
            rows: result.rows,
            count: result.count
        });
    })


};

module.exports.getSecondFilteredData = function (req, res, next) {
    filterValue1 = req.params.filterValue1
    filterField1 = req.params.filterField1
    filterValue2 = req.params.filterValue2
    filterField2 = req.params.filterField2
    offset      = parseInt(req.params.offset)
    console.log(filterField1)
    postngRepo.fetchSecondFilteredData(filterValue1, filterField1,filterValue2, filterField2, offset)
    .then(result=> {
        return res.send({
            results: result
        });
    })


};