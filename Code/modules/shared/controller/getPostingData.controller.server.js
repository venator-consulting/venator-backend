
const { getPosting } = require("../../../models/posting.model.server");
const postngRepo = require("../../../repositories/posting.repo.server")


module.exports.fetch = async (req, res) => {
    try {
        const criteria = req.query;
        const result = await postngRepo.fetch(criteria);
        res
            .status(200)
            .json(result);
    } catch (er) {
        res
            .status(500)
            .json(er.message);
    }
};

module.exports.getData = function (req, res, next) {
        companyCode = req.params.companyCode
        limit      = parseInt(req.params.limit)
        offset      = parseInt(req.params.offset)

        postngRepo.fetchAll(companyCode, offset,limit)
        .then(result=> {
            return res.send({
                results: result
            });
        })

    
};

module.exports.getLastData = function (req, res, next) {
    companyCode = req.params.companyCode
    limit      = parseInt(req.params.limit)

    postngRepo.fetchLastData(companyCode,limit)
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
    limit      = parseInt(req.params.limit)

    console.log(startId, endId,limit)

    postngRepo.fetchLastDataPrevious(companyCode, startId, endId,limit)
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
    limit      = parseInt(req.params.limit)

    postngRepo.fetchFirstFilteredData(filterValue, filterField, offset,limit)
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
    limit      = parseInt(req.params.limit)
    offset      = parseInt(req.params.offset)

    postngRepo.fetchSecondFilteredData(filterValue1, filterField1,filterValue2, filterField2, offset,limit)
    .then(result=> {
        console.log(result)
        return res.send({
            rows: result.rows,
            count: result.count
        });
    })

};
module.exports.getThirdFilteredData = function (req, res, next) {
    filterValue1 = req.params.filterValue1
    filterField1 = req.params.filterField1
    filterValue2 = req.params.filterValue2
    filterField2 = req.params.filterField2
    filterValue3 = req.params.filterValue3
    filterField3 = req.params.filterField3
    limit      = parseInt(req.params.limit)
    offset      = parseInt(req.params.offset)

    postngRepo.fetchThirdFilteredData(filterValue1, filterField1,filterValue2, filterField2, filterValue3, filterField3, offset,limit)
    .then(result=> {
        console.log(result)
        return res.send({
            rows: result.rows,
            count: result.count
        });
    })

};
module.exports.getFirthFilteredData = function (req, res, next) {
    filterValue1 = req.params.filterValue1
    filterField1 = req.params.filterField1
    filterValue2 = req.params.filterValue2
    filterField2 = req.params.filterField2
    filterValue3 = req.params.filterValue3
    filterField3 = req.params.filterField3
    filterValue4 = req.params.filterValue4
    filterField4 = req.params.filterField4
    limit      = parseInt(req.params.limit)
    offset      = parseInt(req.params.offset)

    postngRepo.fetchFirthFilteredData(filterValue1, filterField1,filterValue2, filterField2,filterValue3, filterField3,filterValue4, filterField4,  offset,limit)
    .then(result=> {
        console.log(result)
        return res.send({
            rows: result.rows,
            count: result.count
        });
    })

};
module.exports.getFifthFilteredData = function (req, res, next) {
    filterValue1 = req.params.filterValue1
    filterField1 = req.params.filterField1
    filterValue2 = req.params.filterValue2
    filterField2 = req.params.filterField2
    filterValue3 = req.params.filterValue3
    filterField3 = req.params.filterField3
    filterValue4 = req.params.filterValue4
    filterField4 = req.params.filterField4
    filterValue5 = req.params.filterValue5
    filterField5 = req.params.filterField5
    limit      = parseInt(req.params.limit)
    offset      = parseInt(req.params.offset)

    postngRepo.fetchFifthFilteredData(filterValue1, filterField1,filterValue2, filterField2,filterValue3, filterField3,filterValue4, filterField4,filterValue5, filterField5,  offset,limit)
    .then(result=> {
        console.log(result)
        return res.send({
            rows: result.rows,
            count: result.count
        });
    })

};