const Procedure = require('../models/procedures.model.server');


module.exports.fetchAll = async () => {
    try {
        const res = await Procedure
            .getProcedures()
            .findAll({
                where: {
                    deleted: false
                }
            });
        return res;
    } catch (err) {
        throw new Error('there_is_an_error_in_db_connection');
    }
};


module.exports.fetchOne = async (id) => {
    try {
        const res = await Procedure
            .getProcedures()
            .findAll({
                where: {
                    deleted: false,
                    id: id
                }
            });
        return res;
    } catch (err) {
        throw new Error('there_is_an_error_in_db_connection');
    }
};
module.exports.getManagerProcedures = async (managerId) => {
    try {
        const res = await Procedure
            .getProcedures()
            .findAll({
                where: {
                    deleted: false,
                    userId: managerId
                }
            });
        return res;
    } catch (err) {
        throw new Error('there_is_an_error_in_db_connection');
    }
};


module.exports.insert = async (model) => {
        try {
            const result = await Procedure
                .getProcedures()
                .create(model);
            return result;
        } catch (err) {
            throw new Error('there_is_an_error_in_db_connection');
        }
}; // end of function



module.exports.update = async (model, id) => {
        try {
            const result = await Procedure
                .getProcedures()
                .update(model, {
                    where: {
                        id: id
                    }
                });
            return result;
        } catch (err) {
            throw new Error('there_is_an_error_in_db_connection');
        }
}; // end of update


module.exports.delete = async (id) => {
    try {
        const result = await Procedure
                .getProcedures()
                .update({deleted: true}, {
                    where: {
                        id: id
                    }
                });
            return result;
    } catch (error) {
        throw new Error('there_is_an_error_in_db_connection');
    }
};