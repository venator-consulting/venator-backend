const PSTFile = require('pst-extractor').PSTFile;

const resolve = require('path').resolve;
const mailHistory = require('../models/emails.model.server');

let mails = [];

module.exports.extract = async function (filePath) {

    const pstFile = new PSTFile(resolve(filePath));

    processFolder(pstFile.getRootFolder());
    //  Store mails array in database in transaction
    // console.log(JSON.stringify(mails, null, 3));
    await mailHistory.getEmailHistory().bulkCreate(mails);
}

function processFolder(folder) {
    // go through the folders...
    if (folder.hasSubfolders) {
        let childFolders = folder.getSubFolders();
        for (let childFolder of childFolders) {
            processFolder(childFolder);
        }
    }

    // and now the emails for this folder
    if (folder.contentCount > 0) {
        let email = folder.getNextChild();
        while (email != null) {
            mails.push({
                email: email.emailAddress,
                sender: email.senderName,
                subject: email.subject,
                body: email.body,
                bodyHTML: email.bodyHTML,
                bodyRTF: email.bodyRTF,
                creationTime: email.creationTime,
                messageDeliveryTime: email.messageDeliveryTime,
                bcc: email.displayBCC,
                cc: email.displayCC,
                numberOfAttachments: email.numberOfAttachments
            });
            email = folder.getNextChild();
        }
    }
}