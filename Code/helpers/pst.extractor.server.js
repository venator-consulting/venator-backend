const PSTFile = require('pst-extractor').PSTFile;

const resolve = require('path').resolve;

let depth = -1;
let col = 0;
let mails = [];

module.exports.extract = function (filePath) {

    const pstFile = new PSTFile(resolve(filePath));

    processFolder(pstFile.getRootFolder());
    //  Store mails array in database in transaction
    console.log(JSON.stringify(mails, null, 3));
}

function processFolder(folder) {
    depth++;

    // the root folder doesn't have a display name
    // if (depth > 0) {
    //     console.log(getDepth(depth) + folder.displayName);
    // }

    // go through the folders...
    if (folder.hasSubfolders) {
        let childFolders = folder.getSubFolders();
        for (let childFolder of childFolders) {
            processFolder(childFolder);
        }
    }

    // and now the emails for this folder
    if (folder.contentCount > 0) {
        // depth++;
        let email = folder.getNextChild();
        while (email != null) {
            // console.log(getDepth(depth) +
            //     'Sender: ' + email.senderName +
            //     ', Subject: ' + email.subject);
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
        // depth--;
    }
    // depth--;
}

/**
 * Returns a string with visual indication of depth in tree.
 * @param {number} depth
 * @returns {string}
 */
function getDepth(depth) {
    let sdepth = '';
    if (col > 0) {
        col = 0;
        sdepth += '\n';
    }
    for (let x = 0; x < depth - 1; x++) {
        sdepth += ' | ';
    }
    sdepth += ' |- ';
    return sdepth;
}