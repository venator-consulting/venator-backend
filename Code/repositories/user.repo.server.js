const User = require('../models/user.model.server');
const env = require('../config/environment');
const bcrypt = require('bcryptjs');

module.exports.fetchAll = function () {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await User
                .getUser()
                .findAll({
                    where: {
                        deleted: false
                    }
                });
            resolve(users);
        } catch (err) {
            reject(err);
        }
    });
};


module.exports.fetch = function (search = '_', orderBy = 'username', order = 'DESC', limit = 50, offset = 0) {

    return new Promise(async (resolve, reject) => {
        try {
            const roles = await Role
                .getRole()
                .findAll({
                    where: {
                        [Op.or]: [{
                                username: {
                                    [Op.like]: '%' + search + '%'
                                }
                            },
                            {
                                firstname: {
                                    [Op.like]: '%' + search + '%'
                                }
                            },
                            {
                                lastname: {
                                    [Op.like]: '%' + search + '%'
                                }
                            },
                            {
                                email: {
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


/**
 * check if user exist based on username for authentication
 * the user must be not delted nor expired
 * @param {String} username
 */
module.exports.existUser = function (username) {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User
                .getUser()
                .findOne({
                    where: {
                        username: username,
                        deleted: false,
                        expireDate: {
                            [Op.gt]: new Date()
                        }
                    }
                });
            resolve(user);
        } catch (err) {
            reject(err);
        } // end of try-catch
    }); // end of promise
}; // end of exist user


module.exports.insert = function (user) {
    return new Promise(async (resolve, reject) => {
        try {
            // const password = randomstring.generate(10);
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(user.password, salt);
            user.password = hashedPassword;
            const result = await User
                .getUser()
                .create(user);
            resolve(result);
        } catch (err) {
            reject(err);
        }
    }); // end of promise
}; // end of create/ register new user



module.exports.createDefaultAdmin = function (role) {
    return new Promise(async (resolve, reject) => {
        try {
            // const password = randomstring.generate(10);
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(env.defaultAdminPassword, salt);
            const user = User.getUser();
            const createdUser = await user
                .create({
                    username: env.defaultAdminUsername,
                    password: hashedPassword,
                    firstname: 'Admin',
                    lastname: 'Admin',
                    RoleId: role.id
                });
            // const result = await createdUser.addRole(role);
            resolve(createdUser);
        } catch (err) {
            reject(err.message);
        }
    }); // end of promise
};




/**
 * update user object, you can use for update basic info or change passowrd,
 * just pass the data you want to update
 * @param {*} user User object or part of it
 * @param {*} userId to use in where close
 */
module.exports.update = function (user, userId) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await User
                .getUser()
                .update(user, {
                    where: {
                        id: userId
                    }
                });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
}; // end of update user


module.exports.softDelete = function (userId) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await User
                .getUser()
                .update({
                    deleted: true
                }, {
                    where: {
                        id: userId
                    }
                });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

// TO-DO prefer to use soft delete and expire date instead
/**
 * @deprecated prefer to use soft delete and expire date instead
 * @param {*} userId 
 */
module.exports.delete = function (userId) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await User
                .getUser()
                .destroy({
                    where: {
                        id: userId
                    }
                });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};