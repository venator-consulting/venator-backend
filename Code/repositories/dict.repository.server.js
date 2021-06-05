const { spawn } = require("child_process");
const env = require('../config/environment');

module.exports.createDict = async () => {
    console.log(__dirname);
    const cmd = `-u ${env.databaseUsername} -p ${env.databaseName} < ${__dirname}/dict/openthesaurus_dump.sql`;
    const execution = spawn('mysql', [`-u` + env.databaseUsername, `-p `, '-h localhost:' + env.databaseName]);
    execution.stdin.write( `${env.databasePassword}` );
    execution.stdin.write( '\\. /dict/openthesaurus_dump.sql' );
    execution.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });
    
    execution.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
    });
    
    execution.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });
    
    execution.on("close", code => {
        console.log(`child process exited with code ${code}`);
    });

};