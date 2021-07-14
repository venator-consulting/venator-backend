const errorHandler = require('../../../helpers/error.handler.server').errorHandler;
const accountTypeRepo = require('../../../repositories/accountType.repo.server');
const postingRepo = require('../../../repositories/posting.repo.server');


module.exports.getAll = async (req, res) => {
    try {
        const result = await accountTypeRepo
            .fetchAll();
        res.status(200)
            .json(result);
    } catch (e) {
        errorHandler('account types controller: get all account types', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};

module.exports.getDocTypes = async (req, res) => {
    try {
        const result = await postingRepo
            .getAccountTypes(req.params.orgId, req.params.prcId);
            res.status(200).json(result);
    } catch (e) {
        errorHandler('account type controller: get account types', e);
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
            .updateAccountTypeNew(req.params.orgId, req.params.prcId, req.body.accountType, req.body.accountTypeNewId, req.body.accountTypeNewName);
        res.status(201).json(result);
        } catch (e) {
        errorHandler('account type controller: get account types', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};



module.exports.createDefault = async (req, res) => {
    try {
        const result = await accountTypeRepo
            .createDefault();
            res.status(201).json(result)
    } catch (e) {
        errorHandler('account types controller: create default account types', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
}