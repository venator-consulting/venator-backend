const liquidityRepo = require("../../../repositories/liquidity.analysis.repo");
const Exception = require("../../../helpers/errorHandlers/Exception");
const httpStatus = require("../../../models/enums/httpStatus");
const errors = require('../../../models/enums/errors');

module.exports.getAnalysisMainData = async (req, res) => {
  let fromDate = req.params.fromDate;
  let toDate = req.params.toDate;

  /**
   * Liquidity analysis:
   * it's the sum of free lequidity for each account in each day in the date range.
   * each account here is a bank 'Finainzkonto' account
   * starting_balance and starting_balance_date is:
   *  the amount and date of esablishment account in this bank.
   * bank_balance is the amount of cash we have in this account.
   * when dealing with banks: the bank_balance could be minus (same as credit card account);
   * credit line is the top amount of cash that the bank allow to withdraw from this account;
   *  so if we have 500 bank balance the bank set the credit line = 5000 then we can withdraw 
   *  5500 from this account; this 5500 is the free_liquidity.
   * if we were good customers for the bank, the bank maybe increase the credit_line amount, 
   *  and on the the bank will decrease the credit_line;
   *  so the credit_line will have a start_date and an end date.
   */

  /**
   * the date range will get 3 values:
   * 1- mindate: is the MIN(startingBalanceDate)
   * 2- mindocdate: is MIN(documentDate)
   * 3- maxdate: is MAX(documentDate)
   * we always get the date range even if a date range filter has been sent from the front-end;
   * because the calculation is done incrementally and we should start from the base from date!
   * then we slice the result to conform the filter range. 
   */
  const dateRange = await liquidityRepo.liquiditytDateRange(+req.params.orgId, +req.params.prcId);

  if (dateRange.length < 1) {
    throw new Exception(httpStatus.BAD_REQUEST, errors.no_date_range);
  }

  /**
   * we always start from baseFromDate even there is a filter on the date from the front.
   */
  let baseFromDate = dateRange[0].mindate ?? dateRange[0].mindocdate;

  /**
   * if there is no filter on the date from the front then
   *  set the fromDate and toDate
   * for min date: a starting_balance_Date must be found,
   *  but for stability we get the min(documentDate) as fromDate 
   */
  if (!fromDate && !toDate) {
    fromDate = dateRange[0].mindate;
    if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
      if (
        !dateRange[0].mindocdate ||
        !(dateRange[0].mindocdate instanceof Date)
      ) {
        throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
      } else {
        fromDate = dateRange[0].mindocdate;
      }
    }

    // not needed
    if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_due_date);
    }
    toDate = dateRange[0].maxdate;

  }

  // Get Bank balances as a promise
  const bankBalancesPromise = liquidityRepo.liquidityAnalysis(
    req.params.orgId,
    req.params.prcId,
    fromDate,
    toDate,
    baseFromDate
  );

  // get credit lines as a promise
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
    // calculate free liquidity
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
  // return final result
  res.status(200).json({
    bankBalances: finalResult[0],
    creditLines: finalResult[1],
    freeLiquidity: finalResult[2],
    fromDate: fromDate,
    toDate: toDate
  });
};

module.exports.getAnalysisDetailsData = async (req, res) => {
  let fromDate = req.params.fromDate;
  let toDate = req.params.toDate;

  const dateRange = await liquidityRepo.liquiditytDateRange(
    +req.params.orgId,
    +req.params.prcId
  );
  if (dateRange.length < 1) {
    throw new Exception(httpStatus.BAD_REQUEST, errors.no_date_range);
  }

  let baseFromDate = dateRange[0].mindate ?? dateRange[0].mindocdate;

  if (!fromDate && !toDate) {
    fromDate = dateRange[0].mindate;
    if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
      if (
        !dateRange[0].mindocdate ||
        !(dateRange[0].mindocdate instanceof Date)
      ) {
        throw new Exception(httpStatus.BAD_REQUEST, errors.no_due_date);
      } else {
        fromDate = dateRange[0].mindocdate;
      }
    }

    if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_due_date);
    }
    toDate = dateRange[0].maxdate;

  }

  const bankBalancesPromise = liquidityRepo.liquidityAnalysisDetails(
    req.params.orgId,
    req.params.prcId,
    req.params.accountNumber,
    fromDate,
    toDate,
    baseFromDate
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
    fromDate: fromDate,
    toDate: toDate
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
