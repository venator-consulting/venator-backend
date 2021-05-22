const errorHandler = require('../../../helpers/error.handler.server').errorHandler;
const docTypeRepo = require('../../../repositories/documentType.repo.server');


module.exports.getAll = async (req, res) => {
    try {
        const result = await docTypeRepo
            .fetchAll(req.params.prcdrId);
        res.status(200)
            .json(result);
    } catch (e) {
        errorHandler('document types controller: get all document types', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};

module.exports.createDefault = async (req, res) => {
    try {
        const result = await docTypeRepo
            .createDefault();
            res.status(201).json(result)
    } catch (e) {
        errorHandler('document types controller: create default document types', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
}