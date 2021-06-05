const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();


const Term = sequelizer.define('Term', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    version: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    language_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    level_id: {
        type: DataTypes.BIGINT,
    },
    normalized_word: {
        type: DataTypes.STRING(255)
    },
    original_id: {
        type: DataTypes.INTEGER
    },
    synset_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    user_comment: {
        type: DataTypes.STRING(400)
    },
    word: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    normalized_word2: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: 'term'
});

module.exports.getTerm = function () {
    return Term;
};


module.exports.syncTerm = async function () {
    await this.getTerm().sync({
        alter: true
    });
};