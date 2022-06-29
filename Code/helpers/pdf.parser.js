// get keywords list
const keywords = require("../models/analysis/text.analysis.keywords");
// get attachments
const emailAttachment = require('../models/emailAttachment.model.server');

const emailAttachmentKeywords = require('../models/emailAttachmentsKeywords.model');

const fs = require('fs'),
  PDFParser = require("pdf2json");

module.exports.parseAttacments = async function (orgId, prcId, res) {
  return new Promise(async (resolve, reject) => {
    await emailAttachment.getEmailAttachment('email_attachment_keywords_' + orgId).destroy({
      where: { procedureId: prcId, }
    });

    const pdfParser = new PDFParser();

    // get pdf Attachments
    let attachments = await emailAttachment.getEmailAttachment('email_attachment_' + orgId).findAll({
      where: {
        procedureId: prcId,
        mimeTag: 'application/pdf'
      }
    });
    let count = 0;
    let bulkInsert = [];
    let attachment;
    try {
      // for each attachment
      for (let tempAttachment of attachments) {
        attachment = tempAttachment;
        if (fs.existsSync(attachment?.pstFilename))
          pdfParser.loadPDF(attachment?.pstFilename).catch(err => {
            console.error(`Can't parse file ${attachment?.pstFilename}`);
          });

      }
      // get text from pdf as json
      // pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError)).catch(err => {
      //   console.error('Error caught', err);
      // });
      pdfParser.on("pdfParser_dataReady", async (pdfData) => {
        // let array of records to bulk insert
        bulkInsert = [];
        // if text contains one of key words
        // foreach keyword
        for (let keyword of keywords) {
          keyword = keyword.replace("like '%", "");
          keyword = keyword.replace("%'", "");
          keyword = keyword.replace("REGEXP '(\\b|[^a-zA-Z]+)", "(\\b|[^a-zA-Z]+)");
          keyword = keyword.replace("([^a-zA-Z]+|\\s*)'", "([^a-zA-Z]+|\\s*)");
          const regEx = new RegExp(keyword, 'ig');
          anotherKeyWord:
          // foreach page
          for (let page of pdfData.Pages) {
            // foreach Text
            for (let text of page.Texts) {
              // foreach Row
              for (let row of text.R) {
                let rowText = row.T;
                // if text contains keyword
                if (regEx.test(rowText)) {
                  // add attachment id, email id, keyword to bulk insert
                  bulkInsert.push({
                    attachmentId: attachment?.id,
                    emailHistoryId: attachment?.emailHistoryId,
                    attachmentName: attachment?.originalName,
                    keyword: keyword,
                    procedureId: prcId
                  });
                  break anotherKeyWord;
                }
              } // end of foreach keyword
            } // end of foreach Row
          } // end of foreach Text
        } // end of foreach page
        // if there are records to insert
        if (bulkInsert.length > 0) {
          // insert records
          await emailAttachmentKeywords
            .getEmailAttachmentKeywords('email_attachment_keywords_' + orgId)
            .bulkCreate(bulkInsert);
          bulkInsert = [];
        }
        count++;
        let progress = count / attachments.length * 100;
        console.log(`progress ${progress}%...`);
        res.write('event:' + 'progress\n');
        res.write('data:' + JSON.stringify({ progress }) + '\n\n');
      }).catch(err => {
        console.error('Error caught', err);
      });
    } catch (e) {
      console.log(`Can't parse file ${attachment?.pstFilename}`);
    }
    resolve('done');
  }).catch(err => {
    console.error('Error caught', err);
  });
};