const postingRepo = require("../../../repositories/posting.repo.server");
const nlpHelper = require("../../../helpers/nlp.helper.server");
const keywords = require("../../../models/analysis/text.analysis.keywords");
const paymentAnalysisRepo = require("../../../repositories/payment.analysis.repo");
const precalRepo = require('../../../repositories/precalculated.repo.server');
const dueDateAnalysisRepo = require("../../../repositories/duedate.analysis.repo");
const criteorAnalysisRepo = require("../../../repositories/creditor.analysis.repo");
const Exception = require("../../../helpers/errorHandlers/Exception");
const httpStatus = require("../../../models/enums/httpStatus");
const errors = require('../../../models/enums/errors');

//#region Amount analysis
module.exports.amountAnalysis = async (req, res) => {
  const result = await postingRepo.amountAnalysis(
    req.params.orgId,
    req.params.prcId,
    req.params.baseBalance
  );
  res.status(200).json(result);
};

module.exports.amountAnalysisCalc = async (req, res) => {
  const orgId = +req.params.orgId;
  const prcId = +req.params.prcId;
  const baseBalance = req.params.baseBalance;
  const result = await precalRepo.amountAnalysisGetData(orgId, prcId, baseBalance);
  res.status(200).json(result);
};

module.exports.amountAnalysisDetails = async (req, res) => {
  const result = await postingRepo.amountAnalysisDetails(
    req.params.orgId,
    req.params.prcId,
    req.params.baseBalance,
    req.params.accountNumber
  );
  res.status(200).json(result);
};

module.exports.amountAnalysisDetailsChart = async (req, res) => {
  const result = await postingRepo.amountAnalysisDetailsChart(
    req.params.orgId,
    req.params.prcId,
    req.params.baseBalance ?? 500,
    req.params.accountNumber
  );
  res.status(200).json(result);
};

module.exports.amountJustRelevant = async (req, res) => {
  const result = await postingRepo.amountJustRelevant(
    req.params.orgId,
    req.params.prcId,
    req.params.accountNumber
  );
  res.status(200).json(result);
};

module.exports.amountBulkUpdate = async (req, res) => {
  const result = await postingRepo.amountBulkUpdate(req.params.orgId, req.body);
  res.status(200).json(result);
};
//#endregion Amount analysis

module.exports.getByAccountNumber = async (req, res) => {
  const criteria = req.query;
  const result = await postingRepo.getByAccountNumber(
    req.params.orgId,
    req.params.prcId,
    req.params.accountNumber,
    criteria
  );
  res.status(200).json(result);
};

//#region text analysis
module.exports.textAnalysis = async (req, res) => {
  let fileKeywords = await nlpHelper.getsynonyms(keywords);
  const result = await postingRepo.textAnalysis(
    req.params.orgId,
    req.params.prcId,
    fileKeywords
  );
  res.status(200).json(result);
};

module.exports.getTextAnalysisDateRangeOptionsByWord = async (req, res) => {
  const orgId = +req.params.orgId;
  const prcId = +req.params.prcId;
  const step = req.params.step;
  const result = await precalRepo.getrDateRangeOptions(orgId, prcId, step);
  res.status(200).json(result);
};

module.exports.getTextAnalysisDataByWordCalc = async (req, res) => {
  const orgId = +req.params.orgId;
  const prcId = +req.params.prcId;
  const fromDate = req.params.fromDate;
  const toDate = req.params.toDate;
  const result = await precalRepo.getTextAnalysisDataByWordCalc(orgId, prcId, fromDate, toDate);
  res.status(200).json(result);
};

module.exports.getTextAnalysisDataByWordCalcDefault = async (req, res) => {
  const orgId = +req.params.orgId;
  const prcId = +req.params.prcId;
  const result = await precalRepo.getTextAnalysisDataByWordCalcDefault(orgId, prcId);
  res.status(200).json(result);
};


module.exports.getTextAnalysisByWordForAccount = async (req, res) => {
  const orgId = +req.params.orgId;
  const prcId = +req.params.prcId;
  const accountNumber = +req.params.accountNumber;
  const result = await postingRepo.textAnalysisByWordAndAccount(orgId, prcId, keywords, accountNumber);
  res.status(200).json(result);
};


module.exports.getTextAnalysisDataByAccountCalcDefault = async (req, res) => {
  const orgId = +req.params.orgId;
  const prcId = +req.params.prcId;
  const result = await precalRepo.getTextAnalysisDataByAccountCalcDefault(orgId, prcId);
  res.status(200).json(result);
};

module.exports.textAnalysisIndex = async (req, res) => {
  let fileKeywords = await nlpHelper.getsynonyms(keywords);
  const result = await postingRepo.textAnalysisIndexed(
    req.params.orgId,
    req.params.prcId,
    fileKeywords
  );
  res.status(200).json(result);
};

module.exports.textAnalysisByWord = async (req, res) => {
  let fileKeywords = await nlpHelper.getsynonyms(keywords);
  const result = await postingRepo.textAnalysisByWord(
    req.params.orgId,
    req.params.prcId,
    fileKeywords
  );
  res.status(200).json(result);
};

module.exports.textAnalysisByWordIndexed = async (req, res) => {
  let fileKeywords = await nlpHelper.getsynonyms(keywords);
  const result = await postingRepo.textAnalysisByWordFullTextIndex(
    req.params.orgId,
    req.params.prcId,
    fileKeywords
  );
  res.status(200).json(result);
};

module.exports.textAnalysisDetails = async (req, res) => {
  let fileKeywords = await nlpHelper.getsynonyms(keywords);
  const result = await postingRepo.textAnalysisDetails(
    req.params.orgId,
    req.params.prcId,
    fileKeywords,
    req.params.accountNumber
  );
  res.status(200).json(result);
};

module.exports.textAnalysisWordDetails = async (req, res) => {
  const result = await postingRepo.textAnalysisWordDetails(
    req.params.orgId,
    req.params.prcId,
    req.params.key
  );
  res.status(200).json(result);
};

module.exports.textBulkUpdate = async (req, res) => {
  const result = await postingRepo.textBulkUpdate(req.params.orgId, req.body);
  res.status(200).json(result);
};

module.exports.textJustRelevant = async (req, res) => {
  const result = await postingRepo.textJustRelevant(
    req.params.orgId,
    req.params.prcId,
    req.params.accountNumber
  );
  res.status(200).json(result);
};
//#endregion text analysis


//#region Payment analysis
module.exports.paymentAnalysisDateRange = async (req, res) => {
  const result = await paymentAnalysisRepo.paymentDateRange(
    req.params.orgId,
    req.params.prcId
  );
  res.status(200).json(result);
};

module.exports.paymentAnalysis = async (req, res) => {
  let fromDate = req.params.fromDate;
  let toDate = req.params.toDate;
  let dateRange = [{ fromDate, toDate }];
  if (!fromDate || !toDate || fromDate == 'null' || fromDate == 'undefined' || toDate == 'null' || toDate == 'undefined') {
    dateRange = await paymentAnalysisRepo.paymentDateRangeCalc(
      +req.params.orgId,
      +req.params.prcId
    );
    if (dateRange.length < 1) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_date_range);
    }
    if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
    }
    fromDate = dateRange[0].mindate;
    toDate = new Date();
    if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
      if (!dateRange[0].maxdue || !(dateRange[0].maxdue instanceof Date)) {
        throw new Exception(httpStatus.BAD_REQUEST, errors.no_application_date);
      } else {
        toDate = dateRange[0].maxdue;
      }
    } else {
      toDate = dateRange[0].maxdate;
    }
  }
  // let result = {};
  paymentAnalysisRepo.paymentAnalysisCalc(
    req.params.orgId,
    req.params.prcId,
    fromDate,
    toDate,
    (data) => {
      // result = data;
      res.status(200).json({
        data: data,
        dateRange: dateRange,
      });
    }
  );
};

module.exports.paymentAnalysisDateFilter = async (req, res) => {
  let toDate = req.params.toDate;
  if (!toDate || toDate == 'null' || toDate == 'undefined') {
    dateRange = await paymentAnalysisRepo.paymentDateRangeCalc(
      +req.params.orgId,
      +req.params.prcId
    );
    if (dateRange.length < 1) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_date_range);
    }
    if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
    }
    if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
      if (!dateRange[0].maxdue || !(dateRange[0].maxdue instanceof Date)) {
        throw new Exception(httpStatus.BAD_REQUEST, errors.no_application_date);
      } else {
        toDate = dateRange[0].maxdue;
      }
    } else {
      toDate = dateRange[0].maxdate;
    }
  }
  // let result = {};
  paymentAnalysisRepo.paymentAnalysisDateFilterCalc(
    req.params.orgId,
    req.params.prcId,
    toDate,
    (data) => { res.status(200).json({ data: data }); });
};

module.exports.paymentAnalysisDetails = async (req, res) => {
  const dateRange = await paymentAnalysisRepo.paymentDateRangeCalc(
    +req.params.orgId,
    +req.params.prcId
  );
  if (dateRange.length < 1) {
    throw new Exception(httpStatus.BAD_REQUEST, errors.no_date_range);
  }
  if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
    throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
  }
  const fromDate = dateRange[0].mindate;
  let toDate = new Date();
  if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
    if (!dateRange[0].maxdue || !(dateRange[0].maxdue instanceof Date)) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_application_date);
    } else {
      toDate = dateRange[0].maxdue;
    }
  } else {
    toDate = dateRange[0].maxdate;
  }
  // let result = {};
  paymentAnalysisRepo.paymentAnalysisDetails(
    req.params.orgId,
    req.params.prcId,
    fromDate,
    toDate,
    req.params.accountNumber,
    (data) => {
      // result = data;
      res.status(200).json({
        data: data,
        dateRange: dateRange,
      });
    }
  );
};

module.exports.paymentBulkUpdate = async (req, res) => {
  const result = await paymentAnalysisRepo.paymentBulkUpdate(
    req.params.orgId,
    req.body
  );
  res.status(200).json(result);
};

module.exports.paymentJustRelevant = async (req, res) => {
  const result = await paymentAnalysisRepo.paymentJustRelevant(
    req.params.orgId,
    req.params.prcId,
    req.params.accountNumber
  );
  res.status(200).json(result);
};
//#endregion Payment analysis


//#region duedate analysis 
module.exports.dueDateAnalysis = async (req, res) => {
  let mindate = req.params.fromDate;
  let maxappdate = req.params.toDate;
  const criteria = req.query;
  let dateRange = [{ mindate: mindate, maxappdate }];
  if (!mindate && !maxappdate) {
    dateRange = await dueDateAnalysisRepo.dueDateRangeCalc(
      +req.params.orgId,
      +req.params.prcId
    );
    if (dateRange.length < 1) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_date_range);
    }
    if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_application_date);
    }
    mindate = dateRange[0].mindate;
    maxappdate = dateRange[0].maxappdate;
    if (!dateRange[0].maxappdate || !(dateRange[0].maxappdate instanceof Date)) {
      maxappdate = dateRange[0].maxdate;
    }
  }

  dueDateAnalysisRepo.dueDateAnalysisCalc(
    req.params.orgId,
    req.params.prcId,
    mindate,
    maxappdate,
    criteria.maxDelay,
    criteria.accountNumber,
    (data) => {
      // result = data;
      res.status(200).json({
        data: data,
        dateRange: dateRange,
      });
    }
  );
};

module.exports.dueDateDetailsAnalysis = async (req, res) => {
  let mindocdate = req.params.fromDate;
  let maxappdate = req.params.toDate;
  let dateRange = [{ mindocdate, maxappdate }];
  if (!mindocdate && !maxappdate) {
    dateRange = await dueDateAnalysisRepo.dueDateRangeCalc(
      +req.params.orgId,
      +req.params.prcId
    );
    if (dateRange.length < 1) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_date_range);
    }

    if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_due_date);
    }
    if (!dateRange[0].mindocdate || !(dateRange[0].mindocdate instanceof Date)) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_due_date);
    }
    mindocdate = dateRange[0].mindocdate;
    maxappdate = dateRange[0].maxappdate;
    if (!dateRange[0].maxappdate || !(dateRange[0].maxappdate instanceof Date)) {
      maxappdate = dateRange[0].maxdate;
    }
  }
  dueDateAnalysisRepo.dueDateAnalysisDetails(
    req.params.orgId,
    req.params.prcId,
    mindocdate,
    maxappdate,
    req.params.accountNumber,
    +req.params.maxDelay,
    (data) => {
      // result = data;
      res.status(200).json({
        data: data,
        dateRange: dateRange,
      });
    }
  );
};
//#endregion duedate analysis


//#region Creditor analysis
module.exports.creditorAnalysis = async (req, res) => {
  const criteria = req.query;
  let fileKeywords = await nlpHelper.getsynonyms(keywords);
  const result = await criteorAnalysisRepo.creditorAnalysis(
    req.params.orgId,
    req.params.prcId,
    fileKeywords,
    criteria
  );
  res.status(200).json(result);
};

module.exports.creditorAnalysisCalc = async (req, res) => {
  const criteria = req.query;
  const result = await precalRepo.getCreditorAnalysis(
    req.params.orgId,
    req.params.prcId,
    criteria
  );
  res.status(200).json(result);
};

module.exports.creditorAnalysisDetails = async (req, res) => {
  let fileKeywords = await nlpHelper.getsynonyms(keywords);
  const result = await criteorAnalysisRepo.creditorAnalysisDetails(
    req.params.orgId,
    req.params.prcId,
    fileKeywords,
    req.params.accountNumber
  );
  res.status(200).json(result);
};
//#endregion creditor analysis
