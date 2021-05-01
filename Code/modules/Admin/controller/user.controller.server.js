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

module.exports.register = async (req, res ) => {
    try {
        const user = await userRepo.insert(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports.resetPass = async (req, res) => {
    try {
        const user = await userRepo.resetPassword(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports.fetchAllManagers = function (req, res, next) {
    // managerRoleId = req.params.managerRoleId

    userRepo.fetchAllManagers()
    .then(result=> {
        // console.log(result)
        return res.send({
            results: result
        });
    })


}; 
module.exports.getUsersByOrganisationId = function (req, res, next) {
     organisationId = req.params.id
    userRepo.getUsersByOrganisationId(organisationId)
    .then(result=> {
        return res.send({
            results: result
        });
    })


}; 

