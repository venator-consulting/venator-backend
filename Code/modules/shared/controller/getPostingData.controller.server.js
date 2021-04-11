
const postngRepo = require("../../../repositories/posting.repo.server")


module.exports.getData = function (req, res, next) {
        console.log(req.params.companyCode)
        companyCode = req.params.companyCode
        postngRepo.fetchAll(companyCode)
        .then(result=> {
            return res.json({
                data: result
            });
        })

    
};