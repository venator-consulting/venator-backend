const roleRepo = require('../../../repositories/role.repo.server');
const userRepo = require('../../../repositories/user.repo.server');


module.exports.createDefaultAdmin = async (req, res) => {
    try {
        const defaultRole = await roleRepo.createDefaultAdminRole();
        const adminUser = await userRepo.createDefaultAdmin(defaultRole);
        res
            .status(200)
            .json(adminUser);
    } catch (e) {
        res
            .status(500)
            .json(e);
    }

};