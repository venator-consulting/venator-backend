const PSTFile = require('pst-extractor').PSTFile;
const env = require('../config/environment');
const path = require('path');
const resolve = path.resolve;
const fs = require('fs');
const mailHistory = require('../models/emails.model.server');
const emailAttachment = require('../models/emailAttachment.model.server');
const Account = require('../models/accounts.model.server');
const Sequelize = require("../config/sequelize.config");
const sequelize = Sequelize.getSequelize();
const { Op, QueryTypes } = require("sequelize");

let mails = [];

module.exports.extract = async function (filePath, orgId, prcId) {

    const pstFile = new PSTFile(resolve(filePath));

    await processFolder(pstFile.getRootFolder(), orgId, prcId);
    //  Store mails array in database in transaction
    // console.log(JSON.stringify(mails, null, 3));
    await mailHistory.getEmailHistory('email_history_' + orgId).bulkCreate(mails, {
        include: [emailAttachment.getEmailAttachment('email_attachment_' + orgId)]
    });
}

async function processFolder(folder, orgId, prcId) {
    // go through the folders...
    if (folder.hasSubfolders) {
        let childFolders = folder.getSubFolders();
        for (let childFolder of childFolders) {
            await processFolder(childFolder, orgId, prcId);
        }
    }

    // and now the emails for this folder
    if (folder.contentCount > 0) {
        let email = folder.getNextChild();
        while (email != null) {

            let tempMail = {
                email: email.senderEmailAddress,
                sender: email.senderName,
                rcvName: email.receivedByName,
                rcvEmail: email.receivedByAddress,
                subject: email.subject,
                body: email.body,
                bodyHTML: email.bodyHTML,
                bodyRTF: email.bodyRTF,
                creationTime: email.creationTime,
                messageDeliveryTime: email.messageDeliveryTime,
                bcc: email.displayBCC,
                cc: email.displayCC,
                numberOfAttachments: email.numberOfAttachments,
                procedureId: prcId,
                emailAttachments: new Array()
            };

            //#region attachments
            if (email.hasAttachments) {
                let attachsTemp = [];
                for (let i = 0; i < email.numberOfAttachments; i++) {
                    const attachment = email.getAttachment(i);
                    const emailFolder = path.join(__dirname, '../', env.uploadPath);
                    if (attachment.filename) {
                        const filename = emailFolder + email.descriptorNodeId + '-' + attachment.longFilename;
                        await fs.promises.writeFile(filename, '');
                        const fd = fs.openSync(filename, 'w');
                        const attachmentStream = attachment.fileInputStream;
                        if (attachmentStream) {
                            const bufferSize = 8176;
                            const buffer = Buffer.alloc(bufferSize);
                            let bytesRead;
                            do {
                                bytesRead = attachmentStream.read(buffer);
                                fs.writeSync(fd, buffer, 0, bytesRead);
                            } while (bytesRead == bufferSize);
                            fs.closeSync(fd);
                        }
                        attachsTemp.push({
                            size: attachment?.size,
                            creationTime: attachment?.creationTime,
                            mimeTag: attachment?.mimeTag,
                            pstFilename: filename,
                            originalName: attachment?.filename,
                            procedureId: prcId,
                        });
                    }

                }

                tempMail.emailAttachments = [...attachsTemp];

            }
            //#endregion attachments

            //#region link with creditor
            // get domain from sender mail
            let domain = email?.senderEmailAddress?.split('@').pop();
            let accounts = await Account.getAccounts('accounts_' + orgId).findAll({
                where: {
                    email: { [Op.like]: "%" + domain + "%" },
                    procedureId: prcId,
                    accountType: sequelize.where(sequelize.fn('LOWER', sequelize.col('accountType')), '=', 'k'),
                },
                attributes: ['id', 'accountNumber', 'accountName', 'email'],
                limit: 1
            });
            account = accounts.length > 0 ? accounts[0] : null;
            tempMail.accountId = account?.id;
            tempMail.accountNumber = account?.accountNumber;
            tempMail.accountName = account?.accountName;
            tempMail.accountEmail = account?.email;
            //#endregion link with creditor


            mails.push({ ...tempMail });

            email = folder.getNextChild();
        }
    }
}
