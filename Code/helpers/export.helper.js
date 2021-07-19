const Excel = require('exceljs');
const logger = require('../config/logger.config').logger;
const connection = require('../config/mysql.config').getConnection();
const env = require('../config/environment');
const columns = require('../models/columns/columns.server');


module.exports.exportFile = async (tableName = 'posting', organisationId = 9, procedureId = 1, criteria, cb) => {
    try {

        const options = {
            filename: './public/Venator_Consuting_Exported_file_' + tableName + '_' + organisationId + '_' + procedureId + '.xlsx',
            useStyles: true,
            useSharedStrings: false
        };
        const workbook = new Excel.stream.xlsx.WorkbookWriter(options);

        workbook.creator = 'Venator Consulting';
        workbook.lastModifiedBy = 'Venator Consulting';
        workbook.created = new Date();
        workbook.modified = new Date();
        workbook.lastPrinted = new Date();

        let lang = 'de';

        if (criteria && criteria.lang) {
            lang = criteria.lang;
            delete criteria.lang;
        }

        const worksheet = workbook.addWorksheet(tableName);

        worksheet.columns = columns[tableName][lang];

        let i = 0;

        // depricated because the stream is paused by it self
        // you can reuse it, just consume data from the stream or resume it
        // for await (const row of connection.query('SELECT * FROM ' + tableName + '_' + organisationId).stream()) {
        //     i++;
        //     if (i % env.bulkInsertSize === 0) {
        //         const used = process.memoryUsage().heapUsed / 1024 / 1024;
        //         console.log(`${new Date()}:The Export script uses approximately: ${Math.round(used * 100) / 100} MB`);
        //         logger.info(`${new Date()}:The Export script uses approximately: ${Math.round(used * 100) / 100} MB`);
        //     }
        //     worksheet.addRow(row, 'i+').commit();
        // }

        let query = 'SELECT * FROM posting_' + organisationId + ' t WHERE t.procedureId = ' + procedureId;

        if (criteria) {
            delete criteria.limit;
            delete criteria.offset;
            delete criteria.OrganisationId;
            delete criteria.procedureId;
            for (const key in criteria) {
                if (Object.hasOwnProperty.call(criteria, key)) {
                    const element = criteria[key];
                    query += element.length > 2 ? ` AND ${key} like '%${element}%'` : ` AND ${key} = '${element}'`
                }
            }
        }

        const str = connection.query(query).stream();

        str.on('data', (row) => {
            i++;
            if (i % env.bulkInsertSize === 0) {
                const used = process.memoryUsage().heapUsed / 1024 / 1024;
                console.log(`${new Date()}:The Export script uses approximately: ${Math.round(used * 100) / 100} MB`);
                logger.info(`${new Date()}:The Export script uses approximately: ${Math.round(used * 100) / 100} MB`);
            }
            for (const key in row) {
                if (Object.hasOwnProperty.call(row, key)) {
                    if (row[key] &&
                        (key == 'balance' || key == 'debitAmount' || key == 'creditAmount' || key == 'taxAmount' ||
                            key == 'taxAmountDebit' || key == 'taxAmountCredit' || key == 'StartingBalance')) {
                        try {
                            let temp = Number.parseFloat(row[key]);
                            if (!Number.isNaN(temp)) {
                                row[key] = temp.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
                            }

                        } catch (e) {
                            // do nothing
                        }
                    } else if (row[key] && (row[key] instanceof Date) &&
                        (key == 'documentDate' || key == 'postingDate' || key == 'dueDate' || key == 'dueDateNew' ||
                            key == 'executionDate' || key == 'applicationDate' || key == 'StartingBalanceDate')) {
                        row[key] = row[key].toLocaleDateString('de-DE');
                    }
                }
            }
            worksheet.addRow(row, 'i+').commit();
        });

        str.on('end', async () => {
            await workbook.commit();
            cb(env.domain + 'public/Venator_Consuting_Exported_file_' + tableName + '_' + organisationId + '_' + procedureId + '.xlsx');
        });

        // await workbook.commit();
        // return env.domain + 'public/Venator_Consuting_Exported_file_' + tableName + organisationId + procedureId + '.xlsx';
    } catch (error) {
        console.log(`${new Date()}: ${error.message}`);
        logger.info(`${new Date()}: ${error.message}`);
    }
};