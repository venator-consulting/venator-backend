const { spawn } = require("child_process");
const { Op } = require("sequelize");
const env = require("../config/environment");
const termDictRepo = require("../models/term.dict.model.server");

/**
 * Not used yet - get the words starts with (start) input
 * @param {*} start 
 * @returns 
 */
module.exports.complete = async (start) => {
  return await termDictRepo.getTerm().findAll({
    where: {
      word: {
        [Op.startsWith]: start,
      },
    },
    attributes: ["id", "word", "normalized_word", "normalized_word2"],
    limit: 25,
  });
};

/**
 * Not used yet
 */
module.exports.createDict = async () => {
  const execution = spawn("mysql", [
    "-u" + env.databaseUsername,
    "-p" + env.databasePassword,
    env.databaseName,
  ]);

  // execution.stdin.write( `${env.databasePassword}` );
  execution.stdin.write("\\. " + __dirname + "/dict/openthesaurus_dump.sql");
  execution.stdin.end();
  execution.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
    execution.stdin.write(`${env.databasePassword}`);
    execution.stdin.end();
  });

  execution.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  execution.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });

  execution.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};
