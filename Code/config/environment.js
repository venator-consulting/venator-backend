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
    mailerHost: 'smtp.ethereal.email',
    mailerPort: 587,
    mailerUser: 'elza.tillman13@ethereal.email',
    mailerPassword: 'JdRqgGeAb5HeDqp3Ny',
    resetPassLink: 'http://localhost/reset/', 
    developerMail: 'mohamad.hamad@venator-consulting.de'
    
};