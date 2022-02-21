const UserPreferences = require('../models/userPreferences.model');

module.exports.save = async (data) => {
    return await UserPreferences.getUserPreferences().upsert(data);
};

module.exports.getByUser = async (userId) => {
    return await UserPreferences.getUserPreferences()
        .findOne({ where: { userId } });
};