const PSTFile = require('pst-extractor').PSTFile;

const resolve = require('path').resolve;
const mailHistory = require('../models/emails.model.server');

let mails = [];

module.exports.extract = async function (filePath, orgId, prcId) {

    const pstFile = new PSTFile(resolve(filePath));

    processFolder(pstFile.getRootFolder(), prcId);
    //  Store mails array in database in transaction
    // console.log(JSON.stringify(mails, null, 3));
    await mailHistory.getEmailHistory('email_history_' + orgId).bulkCreate(mails);
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
            mails.push({
                email: email.senderName,
                sender: email.senderEmailAddress,
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
                procedureId: prcId
            });
            email = folder.getNextChild();
        }
    }
}

//receivedByName : display name of the messaging user who receives the message
// sentRepresentingName: display name for the messaging user represented by the sender.
// sentRepresentingEmailAddress: e-mail address for the messaging user who is represented by the sender.
// receivedByAddress: e-mail address for the messaging user who receives the message.
// senderName: message sender's display name.
// displayTo: list of the display names of the primary (To) message recipients.
// emailAddress: messaging user's e-mail address..
// 