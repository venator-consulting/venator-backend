module.exports = {
    port: 8000,
    jwtSecret: 'IT\'s just a secret For JWT token so use some special @#$%!1',
    uploadPath: './modules/Admin/files/',
    databaseName: 'venator',
    databaseUsername: 'root',
    databasePassword: '',
    databaseHost: 'localhost',
    databaseDialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    bulkInsertSize: 2000,
    defaultAdminUsername: 'admin',
    defaultAdminEmail: 'admin@domain.com',
    defaultAdminPassword: 'admin',
};