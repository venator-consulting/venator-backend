const env = require('./environment');
const mysql = require('mysql2');


module.exports.getConnection = () => {
    return mysql.createConnection({
        host: env.host,
        user: env.databaseUsername,
        password: env.databasePassword,
        database: env.databaseName
    });
};