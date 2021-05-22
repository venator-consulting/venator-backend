const errorHandler = require('../../../helpers/error.handler.server').errorHandler;
const postingRepo = require('../../../repositories/posting.repo.server');


module.exports.getDocTypes = async (req, res) => {
    try {
        const result = await postingRepo
            .getDocTypes(req.params.orgId, req.params.prcdrId);
            res.status(200).json(result);
    } catch (e) {
        errorHandler('admin posting controller: get document types', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};

module.exports.updateDoctypes = async (req, res) => {
    try {
        const result = await postingRepo
            .updateDocTypeNew(req.params.orgId, req.params.prcdrId, req.body.documentType, req.body.documentTypeNewId, req.body.documentTypeNewName);
        res.status(201).json(result);
        } catch (e) {
        errorHandler('admin posting controller: get document types', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};
