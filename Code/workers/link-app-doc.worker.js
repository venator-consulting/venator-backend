const { parentPort } = require("worker_threads");
const connection = require("../config/mysql.config");
// get procedure model to update procedure status (relation calculated)
const Procedure = require("../models/procedures.model.server");
const Posting = require('../models/posting.model.server');
const { Op, fn, col, QueryTypes } = require("sequelize");
const Sequelize = require("../config/sequelize.config");
const sequelize = Sequelize.getSequelize();
const Exception = require("../helpers/errorHandlers/Exception");
const httpStatus = require("../models/enums/httpStatus");
const errors = require('../models/enums/errors');

/** 
 * when link/match records we set 2 fields: 1-applicationDocumentNew; 2-applicationDateNew.
 * applicationDocumentNew: is auto generated/ Random
 * applicationDateNew: is the MAX(documentDate) of the linked records
 * so all linked records must have the same applicationDocumentNew and the same applicationDateNew.
 *  */

parentPort.on("message", (data) => {

    linkTransactions(data.orgId, data.prcId);

});

async function linkTransactions(orgId, prcId) {
    let benchmark = process.hrtime();
    // contains th final solution;
    const solution = [];
    // contains not linked invoices yet;
    let orphaned = [];

    let applicationDocumentNew = 0;

    //#region get total infos
    let qTotalRechnungInfo = `select
                                count(p.id) invoicesCount,
                                sum(p.balance) totalInvoices
                                    FROM
                                        posting_${orgId} p
                                    WHERE
                                        p.procedureId = ${prcId}
                                        AND p.documentDate is not null 
                                        and documentTypeNewName = 'Rechnung'
                                        and (p.accountType = 'K'
                                            OR p.accountType = 'D')`;
    const totalRechnungInfo = sequelize.query(qTotalRechnungInfo, { type: QueryTypes.SELECT, });
    let qTotalZahlungInfo = `select
                                count(p.id) paymentsCount,
                                sum(p.balance) totalPayments
                                    FROM
                                        posting_${orgId} p
                                    WHERE
                                        p.procedureId = ${prcId}
                                        AND p.documentDate is not null 
                                        and documentTypeNewName = 'Zahlung'
                                        and (p.accountType = 'K'
                                            OR p.accountType = 'D')`;
    const totalZahlungInfo = sequelize.query(qTotalZahlungInfo, { type: QueryTypes.SELECT, });
    //#endregion get total info

    //#region get Payments
    let qPayments = `select
	                    p.id, p.balance, p.documentDate, p.accountNumber 
                    FROM
                        posting_${orgId} p
                    WHERE
                        p.procedureId = ${prcId}
                        AND p.documentDate is not null 
                        and documentTypeNewName = 'Zahlung'
                        and (p.accountType = 'K'
                            OR p.accountType = 'D')
                    ORDER BY p.documentDate ASC, ABS(p.balance) ASC`;
    const paymentsPromise = sequelize.query(qPayments, { type: QueryTypes.SELECT, });
    //#endregion getPayments

    //#region Assign values (await promises)
    const result = await Promise.all([totalRechnungInfo, totalZahlungInfo, paymentsPromise]);
    const { totalInvoices, invoicesCount } = result[0][0];
    const { totalPayments, paymentsCount } = result[1][0];
    // contains not linked payments records 
    let payments = result[2];
    console.log(`totalInvoices is: ${totalInvoices} and invoicesCount is: ${invoicesCount}`);
    console.log(`totalPayments is: ${totalPayments} and paymentsCount is: ${paymentsCount}`);
    //#endregion Assign values (await promises)

    // for progress
    let counter = 0;
    //#region streaming from DB for invoices
    const qInvoices = `select
                            p.id, p.balance, p.documentDate, p.accountNumber 
                        FROM
                            posting_${orgId} p
                        WHERE
                            p.procedureId =  ${prcId}
                            AND p.documentDate is not null 
                            and documentTypeNewName = 'Rechnung'
                            and (p.accountType = 'K'
                                OR p.accountType = 'D')
                        ORDER BY p.documentDate DESC, ABS(p.balance) ASC`;
    const stream = connection.getConnection().query(qInvoices).stream();
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`${new Date()}:The script uses approximately: ${Math.round(used * 100) / 100} MB`);
    let previousProgress = 0;
    // for each invoices
    stream.on('data', (row) => {
        //#region check if there is an equal payment
        let equalPaymentIndex = -1;
        const equalPayment = payments.find((payment, index) => {
            if (Math.abs(payment.balance) == Math.abs(row.balance) &&
                payment.accountNumber?.trim() === row.accountNumber?.trim() &&
                payment.documentDate.getTime() >= row.documentDate.getTime() &&
                ((payment.documentDate.getTime() - row.documentDate.getTime()) / (1000 * 60 * 60 * 24)) < 120) {
                equalPaymentIndex = index;
                return true;
            } else return false;
        });
        // then we found an equal payment
        if (equalPayment) {
            // generate applicationDocument
            applicationDocumentNew++;
            row.applicationDocumentNew = applicationDocumentNew;
            // the applicationDateNew will be the MAX(equalPayment.documentDate, row.documentDate).
            let maxDocumentDate = equalPayment.documentDate?.getTime() > row.documentDate?.getTime() ?
                equalPayment.documentDate : row.documentDate;
            solution.push(
                { id: row.id, applicationDocumentNew, applicationDateNew: maxDocumentDate, procedureId: prcId },
                { id: equalPayment.id, applicationDocumentNew, applicationDateNew: maxDocumentDate, procedureId: prcId }
            );
            //delete payment from payments array
            payments.splice(equalPaymentIndex, 1);
            let currentProgress = Math.floor((applicationDocumentNew / paymentsCount) * 100);
            if (currentProgress >= (previousProgress + 1)) {
                previousProgress = currentProgress;
                // console.log(`progress from child: ${Math.floor((applicationDocumentNew / paymentsCount) * 100)}%...`);

                parentPort.postMessage({ progress: currentProgress });
            }

        } else /* add it to the orphand array to be manipulated later*/ {
            orphaned.push(row);
        }
        //#endregion check if there is an equal payment
    });
    // on stream finisihing!
    stream.on("end", async () => {
        // and sort payment from the biggest
        console.log(`payments array now: ${payments.length}`);
        console.log(`orphaned array now: ${orphaned.length}`);
        //#region manipulate orphand array!
        counter = applicationDocumentNew;
        // foreach orphaned
        Payments_LOOP: for (let i = 0; i < payments.length; i++) {
            counter++;
            const orphan = payments[i];
            // the applicationDateNew will be the MAX(payment.documentDate, invoices.documentDate...).
            let maxDocumentDate = orphan.documentDate;
            // foreach invoice as a start point
            Invoices_LOOP: for (let j = orphaned.length - 1; j >= 0; j--) {
                const invoice = orphaned[j];
                let total = 0;
                const partialSolution = [];
                // orphan is a payment and must payment.documentDate > invoice.documentDate
                // invoices ordered by documentDate from older/smaller to newer/bigger
                // so if this invoice documentDate is newer/> than payment.documentDate
                // then break; you will never find an invoice with documentDate that conform the condition
                if (
                    // Math.abs(invoice.balance) > Math.abs(orphan.balance) ||
                    invoice.accountNumber?.trim() !== orphan.accountNumber?.trim() ||
                    orphan.documentDate.getTime() < invoice.documentDate.getTime() ||
                    ((orphan.documentDate.getTime() - invoice.documentDate.getTime()) / (1000 * 60 * 60 * 24)) > 120)
                    break;
                else {
                    partialSolution.push(invoice);
                    maxDocumentDate = maxDocumentDate?.getTime() > invoice.documentDate.getTime() ?
                        maxDocumentDate : invoice.documentDate;
                    total += Math.abs(invoice.balance);
                    // this will not be but we take care about it!
                    if (Math.abs(orphan.balance) == total &&
                        orphan.accountNumber?.trim() === invoice.accountNumber?.trim() &&
                        orphan.documentDate.getTime() >= invoice.documentDate.getTime() &&
                        ((orphan.documentDate.getTime() - invoice.documentDate.getTime()) / (1000 * 60 * 60 * 24)) < 120) {
                        // add to solution and delete from original arrays
                        console.warn('they are equal but not manilpulated!!!!!');
                        console.log(`Payment docdate: ${orphan.documentDate} and invoice docdate: ${invoice.documentDate}`);
                    } else {
                        const otherOptions = [...orphaned];
                        otherOptions.splice(j, 1);
                        OtherInvoices_LOOP: for (let k = otherOptions.length - 1; k >= 0; k--) {
                            const option = otherOptions[k];
                            // orphan is a payment and option is an invoice
                            // must payment.documentDate > invoice.documentDate
                            // invoices ordered by documentDate from older/smaller to newer/bigger
                            // so if this invoice documentDate is newer/> than payment.documentDate
                            // then break; you will never find an invoice with documentDate that conform the condition
                            if (
                                // (total + Math.abs(option.balance)) > Math.abs(orphan.balance)
                                option.accountNumber?.trim() !== orphan.accountNumber?.trim() ||
                                orphan.documentDate.getTime() < option.documentDate.getTime() ||
                                ((orphan.documentDate.getTime() - option.documentDate.getTime()) / (1000 * 60 * 60 * 24)) > 120
                            ) {
                                break;
                            } else
                                if (
                                    (total + Math.abs(option.balance)) < Math.abs(orphan.balance) &&
                                    orphan.accountNumber?.trim() === option.accountNumber?.trim() &&
                                    orphan.documentDate.getTime() >= option.documentDate.getTime() &&
                                    ((orphan.documentDate.getTime() - option.documentDate.getTime()) / (1000 * 60 * 60 * 24)) < 120
                                ) {
                                    partialSolution.push(option);
                                    maxDocumentDate = maxDocumentDate?.getTime() > option.documentDate.getTime() ?
                                        maxDocumentDate : option.documentDate;
                                    total += Math.abs(option.balance);
                                    otherOptions.splice(k, 1);
                                } else if (
                                    (total + Math.abs(option.balance)) == Math.abs(orphan.balance) &&
                                    orphan.accountNumber?.trim() === option.accountNumber?.trim() &&
                                    orphan.documentDate.getTime() >= option.documentDate.getTime() &&
                                    ((orphan.documentDate.getTime() - option.documentDate.getTime()) / (1000 * 60 * 60 * 24)) < 120
                                ) {
                                    // we find a solution
                                    applicationDocumentNew++;
                                    orphan.applicationDocumentNew = applicationDocumentNew;
                                    // add orphan to the solution
                                    //set the applicationDateNew as maxDocumentDate
                                    solution.push({ id: orphan.id, applicationDocumentNew, applicationDateNew: maxDocumentDate, procedureId: prcId });
                                    // delete payment from original array
                                    payments.splice(i, 1);

                                    partialSolution.push(option);
                                    // add all in partial solution to the silution
                                    //set the applicationDateNew as maxDocumentDate
                                    solution.push(...partialSolution.map(ps => ({ id: ps.id, applicationDocumentNew, applicationDateNew: maxDocumentDate, procedureId: prcId })));
                                    // delete all in partial solution from payments
                                    orphaned = orphaned.filter(n => !partialSolution.find(val => val.id == n.id));
                                    // console.log(`from child: payment docdate: ${orphan.documentDate} and invoice docdate: ${invoice.documentDate}`);
                                    break Invoices_LOOP;
                                } // end of solution block
                        } // end of options
                    } // end of for start-points
                }
            } // end of for each payment
            let currentProgress = Math.floor((counter / paymentsCount) * 100);
            if (currentProgress >= (previousProgress + 1)) {
                previousProgress = currentProgress;
                // console.log(`progress from child: ${Math.floor((counter / paymentsCount) * 100)}%...`);
                parentPort.postMessage({ progress: currentProgress });
            }
        } // end of each orphan
        //#endregion manipulate orphand array!
        console.log(`after all orphaned are: ${orphaned.length}`);
        console.log(`after all payments are: ${payments.length}`);
        // bulk update the database

        await Posting.getPosting("posting_" + orgId).bulkCreate(solution,
            { updateOnDuplicate: ["applicationDocumentNew", "applicationDateNew"] });
        await Procedure.getProcedures().update({ linkTrans: true }, { where: { id: prcId, }, });
        console.log('execution ended');
        benchmark = process.hrtime(benchmark);
        console.log('benchmark took %d seconds and %d nanoseconds', benchmark[0], benchmark[1]);
    });
    //#endregion streaming from DB for invoices

}