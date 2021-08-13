const postingRepo = require("../../../repositories/posting.repo.server");
const nlpHelper = require("../../../helpers/nlp.helper.server");
const keywords = require("../../../models/analysis/text.analysis.keywords");
const paymentAnalysisRepo = require("../../../repositories/payment.analysis.repo");
const dueDateAnalysisRepo = require("../../../repositories/duedate.analysis.repo");
const criteorAnalysisRepo = require("../../../repositories/creditor.analysis.repo");

module.exports.amountAnalysis = async (req, res) => {
  const result = await postingRepo.amountAnalysis(
    req.params.orgId,
    req.params.prcId,
    req.params.baseBalance
  );
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

module.exports.amountJustRelevant = async (req, res) => {
  const result = await postingRepo.amountJustRelevant(
    req.params.orgId,
    req.params.prcId,
    req.params.accountNumber
  );
  res.status(200).json(result);
};

module.exports.textAnalysis = async (req, res) => {
  let fileKeywords = await nlpHelper.getsynonyms(keywords);
  const result = await postingRepo.textAnalysis(
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

module.exports.amountBulkUpdate = async (req, res) => {
  const result = await postingRepo.amountBulkUpdate(req.params.orgId, req.body);
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

module.exports.paymentAnalysisDateRange = async (req, res) => {
  const result = await paymentAnalysisRepo.paymentDateRange(
    req.params.orgId,
    req.params.prcId
  );
  res.status(200).json(result);
};

module.exports.paymentAnalysis = async (req, res) => {
  const dateRange = await paymentAnalysisRepo.paymentDateRange(
    +req.params.orgId,
    +req.params.prcId
  );
  if (dateRange.length < 1) {
    res.status(500).json({
      messsage: "Can not get Date range!",
      dateRange: dateRange,
    });
  }
  if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
    res.status(400).json({
      messsage: "this procedure has no document date! please re-import it",
      dateRange: dateRange,
    });
  }
  const fromDate = dateRange[0].mindate;
  let toDate = new Date();
  if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
    if (!dateRange[0].maxdue || !(dateRange[0].maxdue instanceof Date)) {
      res.status(400).json({
        messsage:
          "this procedure has no application date nor dueDate! please re-import it",
        dateRange: dateRange,
      });
    } else {
      toDate = dateRange[0].maxdue;
    }
  } else {
    toDate = dateRange[0].maxdate;
  }
  // let result = {};
  paymentAnalysisRepo.paymentAnalysis(
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
    },
    (err) => {
      res.status(500).json({
        messsage: err,
        dateRange: dateRange,
      });
    }
  );
};

module.exports.paymentAnalysisDetails = async (req, res) => {
  const dateRange = await paymentAnalysisRepo.paymentDateRange(
    +req.params.orgId,
    +req.params.prcId
  );
  if (dateRange.length < 1) {
    res.status(500).json({
      messsage: "Can not get Date range!",
      dateRange: dateRange,
    });
  }
  if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
    res.status(400).json({
      messsage: "this procedure has no document date! please re-import it",
      dateRange: dateRange,
    });
  }
  const fromDate = dateRange[0].mindate;
  let toDate = new Date();
  if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
    if (!dateRange[0].maxdue || !(dateRange[0].maxdue instanceof Date)) {
      res.status(400).json({
        messsage:
          "this procedure has no application date nor dueDate! please re-import it",
        dateRange: dateRange,
      });
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
    },
    (err) => {
      res.status(500).json({
        messsage: err,
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

module.exports.dueDateAnalysis = async (req, res) => {
  const dateRange = await dueDateAnalysisRepo.dueDateRange(
    +req.params.orgId,
    +req.params.prcId
  );
  if (dateRange.length < 1) {
    res.status(500).json({
      messsage: "Can not get Date range!",
      dateRange: dateRange,
    });
    return;
  }
  if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
    res.status(400).json({
      messsage: "this procedure has no due date! please re-import it",
      dateRange: dateRange,
    });
    return;
  }
  const fromDate = dateRange[0].mindate;
  if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
    res.status(400).json({
      messsage: "this procedure has no due date! please re-import it",
      dateRange: dateRange,
    });
    return;
  }
  const toDate = dateRange[0].maxdate;
  if (!dateRange[0].mindocdate || !(dateRange[0].mindocdate instanceof Date)) {
    res.status(400).json({
      messsage: "this procedure has no due date! please re-import it",
      dateRange: dateRange,
    });
    return;
  }
  const mindocdate = dateRange[0].mindocdate;
  const maxappdate = dateRange[0].maxappdate;
  if (!dateRange[0].maxappdate || !(dateRange[0].maxappdate instanceof Date)) {
    maxappdate = dateRange[0].maxdate;
  }

  dueDateAnalysisRepo.dueDateAnalysis(
    req.params.orgId,
    req.params.prcId,
    fromDate,
    toDate,
    mindocdate,
    maxappdate,
    (data) => {
      // result = data;
      res.status(200).json({
        data: data,
        dateRange: dateRange,
      });
    },
    (err) => {
      res.status(500).json({
        messsage: err,
        dateRange: dateRange,
      });
    }
  );
};

module.exports.dueDateDetailsAnalysis = async (req, res) => {
  const dateRange = await dueDateAnalysisRepo.dueDateRange(
    +req.params.orgId,
    +req.params.prcId
  );
  if (dateRange.length < 1) {
    res.status(500).json({
      messsage: "Can not get Date range!",
      dateRange: dateRange,
    });
    return;
  }

  if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
    res.status(400).json({
      messsage: "this procedure has no due date! please re-import it",
      dateRange: dateRange,
    });
    return;
  }
  if (!dateRange[0].mindocdate || !(dateRange[0].mindocdate instanceof Date)) {
    res.status(400).json({
      messsage: "this procedure has no due date! please re-import it",
      dateRange: dateRange,
    });
    return;
  }
  const mindocdate = dateRange[0].mindocdate;
  const maxappdate = dateRange[0].maxappdate;
  if (!dateRange[0].maxappdate || !(dateRange[0].maxappdate instanceof Date)) {
    maxappdate = dateRange[0].maxdate;
  }

  dueDateAnalysisRepo.dueDateAnalysisDetails(
    req.params.orgId,
    req.params.prcId,
    mindocdate,
    maxappdate,
    req.params.accountNumber,
    (data) => {
      // result = data;
      res.status(200).json({
        data: data,
        dateRange: dateRange,
      });
    },
    (err) => {
      res.status(500).json({
        messsage: err,
        dateRange: dateRange,
      });
    }
  );
};

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
