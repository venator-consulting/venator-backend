const roleRepo = require('../../../repositories/role.repo.server');


module.exports.fetchAll = async function (req, res, next) {
    try {
        const roles = await roleRepo
            .fetchAll();
        res
            .status(200)
            .json(roles);
    } catch (e) {
        res
            .status(500)
            .json({
                error: e
            });
    }
};