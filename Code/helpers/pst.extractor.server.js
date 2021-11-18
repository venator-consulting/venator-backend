const PSTFile = require('pst-extractor').PSTFile;
const env = require('../config/environment');
const resolve = require('path').resolve;
const mailHistory = require('../models/emails.model.server');
const emailAttachment = require('../models/emailAttachment.model.server');

let mails = [];

module.exports.extract = async function (filePath, orgId, prcId) {

    const pstFile = new PSTFile(resolve(filePath));

    processFolder(pstFile.getRootFolder(), prcId);
    //  Store mails array in database in transaction
    // console.log(JSON.stringify(mails, null, 3));
    await mailHistory.getEmailHistory('email_history_' + orgId).bulkCreate(mails, {
        include: [emailAttachment.getEmailAttachment('email_attachment_' + orgId)]
    });
}

function processFolder(folder, prcId) {
    // go through the folders...
    if (folder.hasSubfolders) {
        let childFolders = folder.getSubFolders();
        for (let childFolder of childFolders) {
            processFolder(childFolder, prcId);
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



            if (email.hasAttachments) {
                let numberOfAttachments = email.numberOfAttachments;
                if (numberOfAttachments > 0) {
                    for (let attachmentNumber = 0; attachmentNumber < numberOfAttachments; attachmentNumber++) {
                        let attachment = email.getAttachment(attachmentNumber);
                        let fileName = attachment?.pstFile?.pstFilename;
                        if(fileName?.includes('/')) {
                            let parts = fileName.split('/');
                            fileName = parts[parts.length - 1];
                        } else if(fileName?.includes('\\')) {
                            let parts = fileName.split('\\');
                            fileName = parts[parts.length - 1];
                        }
                        // fileName= env.domain + 'public/' + fileName;
                        tempMail.emailAttachments.push({
                            size: attachment?.size,
                            creationTime: attachment?.creationTime,
                            mimeTag: attachment?.mimeTag,
                            pstFilename: fileName,
                            originalName: attachment?.displayName
                        });
                    }
                }
            }

            mails.push(tempMail);

            email = folder.getNextChild();
        }
    }
}
