module.exports = {
    // used for excel export from back-end
//    domain: 'http://venalytics.de:8000/',
    domain: 'http://localhost:8000/',
    port: 8000,
    jwtSecret: 'IT\'s just a secret For JWT token so use some special @#$%!1',
    uploadPath: './modules/Admin/files/',
    publicImgsPath: './public/imgs/',
    databaseName: 'venator',
    databaseUsername: 'venator',
    databasePassword: '$Venator1',
    //  databaseUsername: 'root',
    //  databasePassword: '',
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
    // used for register new user to generate link to reset the password
    // resetPassLink: 'http://localhost/reset/',
   resetPassLink: 'http://venalytics.de/reset/',  
    developerMail: 'mohamad.hamad@venator-consulting.de'
    
};