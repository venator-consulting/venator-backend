const bcrypt = require('bcryptjs');
const UsersRepo = require('../../../repositories/user.repo.server');

module.exports.changePassword = function (req, res, next) {
    const userID = req.userinfo.id;
    const password = req.body.password;
    const newPassword = req.body.newPassword;
    UsersRepo.existUser(userID)
        .then(rows => {
            if (rows.length != 1 || !bcrypt.compareSync(password, rows[0].password)) {
                return res.status(403).json({
                    message: 'Incorrect password!'
                });
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(newPassword, salt);
                UsersRepo
                    .update({password: hashedPassword}, userID)
                    .then(r => {
                        res.status(201).json({
                            message: 'Password changed'
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: 'Something is not right, Internal server ERROR! please try again later',
                            err: err
                        });
                    });
            }

        })
        .catch(er => {
            res.status(500).json({
                message: 'Something is not right, Internal server ERROR! please try again later',
                err: er
            });
        });
};