const liquidityRepo = require("../../../repositories/liquidity.analysis.repo");
const Exception = require("../../../helpers/errorHandlers/Exception");
const httpStatus = require("../../../models/enums/httpStatus");

module.exports.getAnalysisMainData = async (req, res) => {
  const dateRange = await liquidityRepo.liquiditytDateRange(
    +req.params.orgId,
    +req.params.prcId
  );
  if (dateRange.length < 1) {
    throw new Exception(httpStatus.BAD_REQUEST, "no_date_range");
  }
  let fromDate = dateRange[0].mindate;
  if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
    if (
      !dateRange[0].mindocdate ||
      !(dateRange[0].mindocdate instanceof Date)
    ) {
      throw new Exception(httpStatus.BAD_REQUEST, "no_document_date");
    } else {
      fromDate = dateRange[0].mindocdate;
    }
  }

  // not needed
  if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
    throw new Exception(httpStatus.BAD_REQUEST, "no_due_date");
  }
  const toDate = dateRange[0].maxdate;

  const bankBalancesPromise = liquidityRepo.liquidityAnalysis(
    req.params.orgId,
    req.params.prcId,
    fromDate,
    toDate
  );

  const creditLinesPromise = liquidityRepo.creditLinnes(
    req.params.orgId,
    req.params.prcId,
    fromDate,
    toDate
  );

  let finalResult = new Array();

  await Promise.all([bankBalancesPromise, creditLinesPromise]).then(
    (values) => {
      finalResult = values;
    }
  );

  finalResult[2] = new Array();

  if (
    finalResult[1] &&
    finalResult[1].creditLines &&
    finalResult[1].creditLines.length > 0
  ) {
    for (let index = 0; index < finalResult[1].creditLines.length; index++) {
      const bankBalance = finalResult[0].bankBalances[index]
        ? finalResult[0].bankBalances[index]
        : 0;
      const creditLine = finalResult[1].creditLines[index]
        ? finalResult[1].creditLines[index]
        : 0;
      finalResult[2][index] = +bankBalance + +creditLine;
    }
  }

  res.status(200).json({
    bankBalances: finalResult[0],
    creditLines: finalResult[1],
    freeLiquidity: finalResult[2],
  });
};

module.exports.getAnalysisDetailsData = async (req, res) => {
  const dateRange = await liquidityRepo.liquiditytDateRange(
    +req.params.orgId,
    +req.params.prcId
  );
  if (dateRange.length < 1) {
    throw new Exception(httpStatus.BAD_REQUEST, "no_date_range");
  }
  let fromDate = dateRange[0].mindate;
  if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
    if (
      !dateRange[0].mindocdate ||
      !(dateRange[0].mindocdate instanceof Date)
    ) {
      throw new Exception(httpStatus.BAD_REQUEST, "no_due_date");
    } else {
      fromDate = dateRange[0].mindocdate;
    }
  }

  if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
    throw new Exception(httpStatus.BAD_REQUEST, "no_due_date");
  }
  const toDate = dateRange[0].maxdate;

  const bankBalancesPromise = liquidityRepo.liquidityAnalysisDetails(
    req.params.orgId,
    req.params.prcId,
    req.params.accountNumber,
    fromDate,
    toDate
  );

  const creditLinesPromise = liquidityRepo.creditLinnesDetails(
    req.params.orgId,
    req.params.prcId,
    req.params.accountNumber,
    fromDate,
    toDate
  );

  let finalResult = new Array();

  await Promise.all([bankBalancesPromise, creditLinesPromise]).then(
    (values) => {
      finalResult = values;
    }
  );

  finalResult[2] = new Array();

  if (finalResult[1] && finalResult[1].length > 0) {
    for (let index = 0; index < finalResult[1].length; index++) {
      const bankBalance = finalResult[0].bankBalances[index]
        ? finalResult[0].bankBalances[index]
        : 0;
      const creditLine = finalResult[1][index] ? finalResult[1][index] : 0;
      finalResult[2][index] = +bankBalance + +creditLine;
    }
  }

  res.status(200).json({
    bankBalances: finalResult[0],
    creditLines: finalResult[1],
    freeLiquidity: finalResult[2],
  });
};

module.exports.getDetailsForSelectedDate = async (req, res) => {
  const result = await liquidityRepo.selectedDate(
    req.params.orgId,
    req.params.prcId,
    req.params.accountNumber,
    req.params.selectedDate
  );
  res.status(200).json(result);
};
