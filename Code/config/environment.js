module.exports = {
    domain: 'http://localhost:8000/',
    port: 8000,
    jwtSecret: 'IT\'s just a secret For JWT token so use some special @#$%!1',
    uploadPath: './modules/Admin/files/',
    publicImgsPath: './public/imgs/',
    databaseName: 'venator',
    databaseUsername: 'venator',
    databasePassword: '$Venator1',
    databaseHost: 'localhost',
    databaseDialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    bulkInsertSize: 2000,
    defaultAdminUsername: 'admin',
    defaultAdminEmail: 'admin@domain.com',
    defaultAdminPassword: 'admin',
    mailerHost: 'smtp.ionos.de',
    mailerPort: 587,
    mailerUser: 'login@venalytics.de',
    mailerPassword: '$Werft12',
    resetPassLink: 'http://localhost/reset/', 
    developerMail: 'ibrahim.ad.dandan@gmail.com'
    
};