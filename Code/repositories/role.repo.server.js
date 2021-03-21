const Role = require('../models/role.model.server');


module.exports.fetchAll = function() {
    return new Pro
};

module.exports.fetch = function (search = '_', orderBy = 'name', order = 'DESC', limit = 50, offset = 0) {
    // if(!order) order = 'DESC';
    // if(!orderBy) orderBy = 'name';
    // if(!search) search = '_';
    // if(!limit) limit = 50;
    // if(!offset) offset = 0;
    return new Promise(async (resolve, reject) => {
        try {
            const roles = await Role
                .getRole()
                .findAll({
                    where: {
                        [Op.or]: [{
                                name: {
                                    [Op.like]: '%' + search + '%'
                                }
                            },
                            {
                                role_description: {
                                    [Op.like]: '%' + search + '%'
                                }
                            }
                        ]

                    },
                    offset: offset,
                    limit: limit,
                    order: [
                        [orderBy, order]
                    ]
                });
            resolve(user);
        } catch (err) {
            reject(err);
        } // end of try-catch
    }); // end of promise
};


module.exports.insert = function (role) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Role
                .getRole()
                .create(role);
            resolve(result);
        } catch (err) {
            reject(err);
        }
    }); // end of promise
}; // end of function



module.exports.update = function (role, roleId) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Role
                .getRole()
                .update(role, {
                    where: {
                        id: roleId
                    }
                });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    })
}; // end of update


/**
 * @deprecated prefer to use soft delete and expire date instead
 * @param {*} roleId 
 */
module.exports.deleteUser = function (roleId) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Role
                .getRole()
                .destroy({
                    where: {
                        id: roleId
                    }
                });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};