const PSTFile = require('pst-extractor').PSTFile;
const env = require('../config/environment');
const path = require('path');
const resolve = path.resolve;
const fs = require('fs');
const mailHistory = require('../models/emails.model.server');
const emailAttachment = require('../models/emailAttachment.model.server');

let mails = [];

module.exports.extract = async function (filePath, orgId, prcId) {

    const pstFile = new PSTFile(resolve(filePath));

    await processFolder(pstFile.getRootFolder(), prcId);
    //  Store mails array in database in transaction
    // console.log(JSON.stringify(mails, null, 3));
    await mailHistory.getEmailHistory('email_history_' + orgId).bulkCreate(mails, {
        include: [emailAttachment.getEmailAttachment('email_attachment_' + orgId)]
    });
}

async function processFolder(folder, prcId) {
    // go through the folders...
    if (folder.hasSubfolders) {
        let childFolders = folder.getSubFolders();
        for (let childFolder of childFolders) {
            await processFolder(childFolder, prcId);
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
                            originalName: attachment?.displayName
                        });
                    }
                    
                }

                tempMail.emailAttachments = [...attachsTemp];

                // let numberOfAttachments = email.numberOfAttachments;
                // let attachsTemp = [];
                // if (numberOfAttachments > 0) {
                //     for (let attachmentNumber = 0; attachmentNumber < numberOfAttachments; attachmentNumber++) {
                //         let attachment = email.getAttachment(attachmentNumber);
                //         let fileName = attachment?.pstFile?.pstFilename;
                //         if (fileName?.includes('/')) {
                //             let parts = fileName.split('/');
                //             fileName = parts[parts.length - 1];
                //         } else if (fileName?.includes('\\')) {
                //             let parts = fileName.split('\\');
                //             fileName = parts[parts.length - 1];
                //         }
                //         // fileName= env.domain + 'public/' + fileName;
                //         attachsTemp.push({
                //             size: attachment?.size,
                //             creationTime: attachment?.creationTime,
                //             mimeTag: attachment?.mimeTag,
                //             pstFilename: fileName,
                //             originalName: attachment?.displayName
                //         });
                //     }
                //     tempMail.emailAttachments = [...attachsTemp];
                // }
            }

            mails.push({ ...tempMail });

            email = folder.getNextChild();
        }
    }
}
