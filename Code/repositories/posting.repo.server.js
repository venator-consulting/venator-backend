const Posting = require("../models/posting.model.server");
const { Op, fn, col, QueryTypes } = require("sequelize");
const Sequelize = require("../config/sequelize.config");
const { values } = require("../models/analysis/text.analysis.keywords");

const sequelize = Sequelize.getSequelize();

module.exports.fetch = async (criteria) => {
  try {
    const OrganisationId = criteria.OrganisationId;
    if (!OrganisationId) throw new Error("Organisation_id_is_mandatory");
    delete criteria.OrganisationId;
    const limit = criteria.limit ? criteria.limit : 25;
    delete criteria.limit;
    const offset = criteria.offset ? criteria.offset : 0;
    delete criteria.offset;
    let orderBy = criteria.orderBy ? criteria.orderBy : "id";
    orderBy =
      orderBy == "accountNumber"
        ? sequelize.fn("LPAD", sequelize.col("accountNumber"), 10, 0)
        : orderBy;
    delete criteria.orderBy;
    const sortOrder = criteria.sortOrder == -1 ? "DESC" : "ASC";
    delete criteria.sortOrder;
    for (const key in criteria) {
      if (Object.hasOwnProperty.call(criteria, key)) {
        if (criteria[key].toString().length > 2) {
          criteria[key] = {
            [Op.like]: "%" + criteria[key] + "%",
          };
        }
      }
    }
    return await Posting.getPosting(
      "posting_" + OrganisationId
    ).findAndCountAll({
      where: criteria,
      offset: +offset,
      limit: +limit,
      order: [[orderBy, sortOrder]],
    });
  } catch (err) {
    // TO-DO: set a custom error message in production environment
    throw new Error(err.message);
  }
};

module.exports.fetchAll = function (companyCode, offset, limit) {
  return new Promise(async (resolve, reject) => {
    try {
      const postings = await Posting.getPosting().findAll({
        where: {
          companyCode: companyCode,
        },
        offset: offset,
        limit: limit,
        order: [["id", "ASC"]],
      });
      resolve(postings);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports.getDocTypes = async (organisationId, procedureId) => {
  try {
    const result = await Posting.getPosting(
      "posting_" + organisationId
    ).findAll({
      where: {
        ProcedureId: procedureId,
        documentType: {
          [Op.ne]: null,
        },
      },
      attributes: [
        [fn("DISTINCT", col("documentType")), "documentType"],
        "documentTypeNewId",
        "documentTypeNewName",
        "procedureId",
      ],
      distinct: true,
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getAccountTypes = async (organisationId, procedureId) => {
  try {
    const result = await Posting.getPosting(
      "posting_" + organisationId
    ).findAll({
      where: {
        ProcedureId: procedureId,
        accountType: {
          [Op.ne]: null,
        },
      },
      attributes: [
        [fn("DISTINCT", col("accountNumber")), "accountNumber"],
        "accountName",
        "accountType",
        "accountTypeNewId",
        "accountTypeNewName",
        "procedureId",
      ],
      distinct: true,
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.updateDocTypeNew = async (
  organisationId,
  procedureId,
  documentType,
  documentTypeNewId,
  documentTypeNewName
) => {
  try {
    return await Posting.getPosting("posting_" + organisationId).update(
      {
        documentTypeNewId: documentTypeNewId,
        documentTypeNewName: documentTypeNewName,
      },
      {
        where: {
          procedureId: procedureId,
          documentType: documentType,
        },
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.updateAccountTypeNew = async (
  organisationId,
  procedureId,
  accountNumber,
  accountTypeNewId,
  accountTypeNewName
) => {
  try {
    return await Posting.getPosting("posting_" + organisationId).update(
      {
        accountTypeNewId: accountTypeNewId,
        accountTypeNewName: accountTypeNewName,
      },
      {
        where: {
          procedureId: procedureId,
          accountNumber: accountNumber,
        },
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getStartingBalance = async (organisationId, procedureId) => {
  try {
    const result = await Posting.getPosting(
      "posting_" + organisationId
    ).findAll({
      where: {
        ProcedureId: procedureId,
        accountTypeNewName: "Finanzkonto",
      },
      attributes: [
        [fn("DISTINCT", col("accountNumber")), "accountNumber"],
        "accountName",
        "accountTypeNewId",
        "accountTypeNewName",
        "procedureId",
        "StartingBalance",
        "StartingBalanceDate",
      ],
      distinct: true,
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.updateStartBalance = async (
  organisationId,
  procedureId,
  accountNumber,
  StartingBalance,
  StartingBalanceDate
) => {
  try {
    return await Posting.getPosting("posting_" + organisationId).update(
      {
        StartingBalance: StartingBalance,
        StartingBalanceDate: StartingBalanceDate,
      },
      {
        where: {
          procedureId: procedureId,
          accountNumber: accountNumber,
          accountTypeNewName: "Finanzkonto",
        },
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.amountAnalysis = async (orgId, prcId, baseBalance) => {
  try {
    const query = `SELECT p.accountNumber , p.accountName , SUM(p.balance) as totalBalance, COUNT(p.id) as totlaCount
                            FROM posting_${orgId}  p
                            WHERE procedureId = :procedureId 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.accountNumber is not NULL
                                AND (UPPER(p.documentType) = 'KZ' OR 
                                    UPPER(p.documentType) = 'ZP' OR
                                    UPPER(p.documentTypeNewName) = 'ZAHLUNG')
                                AND p.balance = ROUND(p.balance)
                                AND balance >= :baseBalance
                            GROUP BY p.accountNumber , p.accountName`;
    const result = await sequelize.query(query, {
      replacements: {
        procedureId: prcId,
        baseBalance: baseBalance,
      },
      type: QueryTypes.SELECT,
    });
    result.forEach((val) => {
      val.totalBalance = +val.totalBalance;
      val.totlaCount = +val.totlaCount;
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.amountAnalysisDetails = async (
  orgId,
  prcId,
  baseBalance,
  accountNumber
) => {
  try {
    const query = `SELECT p.id, p.procedureId, p.accountNumber, p.accountName, p.amountRelevant,
                                p.amountRelevantComment, p.accountType, p.documentType, p.balance, p.contraAccountNumber,
                                p.contraAccountName, p.documentTypeNewName, p.documentNumber, p.documentDate, p.recordNumber,
                                p.ledgerId, p.executionDate, p.dueDate
                            FROM posting_${orgId}  p
                            WHERE procedureId = :procedureId 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.accountNumber = :accountNumber
                                AND (UPPER(p.documentType) = 'KZ' OR 
                                    UPPER(p.documentType) = 'ZP' OR
                                    UPPER(p.documentTypeNewName) = 'ZAHLUNG')
                                AND p.balance = ROUND(p.balance)
                                AND balance >= :baseBalance`;
    const result = await sequelize.query(query, {
      replacements: {
        procedureId: prcId,
        baseBalance: baseBalance,
        accountNumber: accountNumber,
      },
      type: QueryTypes.SELECT,
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.getByAccountNumber = async (
  orgId,
  prcId,
  accountNumber,
  criteria
) => {
  try {
    const limit = criteria.limit ? criteria.limit : 25;
    delete criteria.limit;
    const offset = criteria.offset ? criteria.offset : 0;
    delete criteria.offset;
    let orderBy = criteria.orderBy ? criteria.orderBy : "id";
    orderBy =
      orderBy == "accountNumber"
        ? sequelize.fn("LPAD", sequelize.col("accountNumber"), 10, 0)
        : orderBy;
    delete criteria.orderBy;
    const sortOrder = criteria.sortOrder == -1 ? "DESC" : "ASC";
    delete criteria.sortOrder;

    for (const key in criteria) {
      if (Object.hasOwnProperty.call(criteria, key)) {
        if (criteria[key].toString().length > 2) {
          criteria[key] = {
            [Op.like]: "%" + criteria[key] + "%",
          };
        }
        if (!criteria[key]) delete criteria[key];
      }
    }
    criteria.procedureId = prcId;
    criteria.accountNumber = accountNumber;
    const result = await Posting.getPosting("posting_" + orgId).findAndCountAll(
      {
        where: criteria,
        offset: +offset,
        limit: +limit,
        order: [[orderBy, sortOrder]],
      }
    );
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.textAnalysis = async (orgId, prcId, keys) => {
  try {
    let query = `SELECT p.accountNumber , p.accountName , COUNT(p.id) as totlaCount
                            FROM posting_${orgId}  p
                            WHERE procedureId = :procedureId 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.accountNumber is not NULL 
                                `;
    query += keys.length > 0 ? " AND ( " : "";

    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      query += `  p.reference ${key}
                        OR p.textPosting ${key}
                        OR p.textHeader ${key} OR`;
    }
    query += keys.length > 0 ? " 1 <> 1) " : "";

    query += "GROUP BY p.accountNumber , p.accountName";

    const result = await sequelize.query(query, {
      replacements: {
        procedureId: prcId,
      },
      type: QueryTypes.SELECT,
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.textAnalysisByWord = async (orgId, prcId, keys) => {
  try {
      let query = ' ';
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      let originalKey = keys[index];
      originalKey = originalKey.replace('like \'%', '');
      originalKey = originalKey.replace('%\'', '');
      originalKey = originalKey.replace('REGEXP \'(\\b|[^a-zA-Z]+)', '');
      originalKey = originalKey.replace('([^a-zA-Z]+|\\s*)\'', '');
      query += `  
            SELECT
                SUM(pos.totalCount) recordsCount,
                COUNT(pos.accountNumber) accountsCount,
                IF(1 = 1,
                    '${originalKey}',
                    '${originalKey}') word
            from
                (SELECT
                    p.accountNumber ,
                    count(p.accountNumber) totalCount
                from
                    posting_1 p
                WHERE
                    UPPER(p.textPosting) ${key}
                    OR UPPER(p.reference) ${key}
                    OR UPPER(p.textHeader) ${key}
                GROUP by
                    p.accountNumber) pos
            `;
            query += index < keys.length-1 ? ' UNION ' : '';
    }


    const result = await sequelize.query(query, {
      replacements: {
        procedureId: prcId,
      },
      type: QueryTypes.SELECT,
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.textAnalysisDetails = async (
  orgId,
  prcId,
  keys,
  accountNumber
) => {
  try {
    let query = `SELECT p.id, p.procedureId, p.accountNumber, p.accountName, p.textRelevant,
                            p.textRelevantComment, p.accountType, p.documentType, p.balance, p.contraAccountNumber,
                            p.contraAccountName, p.documentTypeNewName, p.documentNumber, p.documentDate, p.recordNumber,
                            p.ledgerId, p.executionDate, p.dueDate, p.reference, p.textPosting, p.textHeader
                            FROM posting_${orgId}  p
                            WHERE procedureId = :procedureId 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.accountNumber = :accountNumber
                                `;
    query += keys.length > 0 ? " AND ( " : "";

    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      query += `  p.reference ${key}
                        OR p.textPosting ${key}
                        OR p.textHeader ${key} OR`;
    }
    query += keys.length > 0 ? " 1 <> 1) " : "";

    const result = await sequelize.query(query, {
      replacements: {
        procedureId: prcId,
        accountNumber: accountNumber,
      },
      type: QueryTypes.SELECT,
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Bulk update of array of posting records
 * @param {number} orgId
 * @param {Posting[]} records
 */
module.exports.textBulkUpdate = async (orgId, records) => {
  try {
    const postings = await Posting.getPosting("posting_" + orgId).bulkCreate(
      records,
      {
        updateOnDuplicate: ["textRelevant", "textRelevantComment"],
      }
    );
    return postings;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Bulk update of array of posting records
 * @param {number} orgId
 * @param {Posting[]} records
 */
module.exports.amountBulkUpdate = async (orgId, records) => {
  try {
    const postings = await Posting.getPosting("posting_" + orgId).bulkCreate(
      records,
      {
        updateOnDuplicate: ["amountRelevant", "amountRelevantComment"],
      }
    );
    return postings;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.textJustRelevant = async (orgId, prcId, accountNumber) => {
  try {
    return await Posting.getPosting("posting_" + orgId).findAll({
      where: {
        textRelevant: true,
        accountNumber: accountNumber,
        ProcedureId: prcId,
      },
      attributes: [
        "id",
        "procedureId",
        "accountNumber",
        "accountName",
        "textRelevant",
        "textRelevantComment",
        "accountType",
        "documentType",
        "balance",
        "contraAccountNumber",
        "contraAccountName",
        "documentTypeNewName",
        "documentNumber",
        "documentDate",
        "recordNumber",
        "ledgerId",
        "executionDate",
        "dueDate",
        "reference",
        "textPosting",
        "textHeader",
      ],
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.amountJustRelevant = async (orgId, prcId, accountNumber) => {
  try {
    return await Posting.getPosting("posting_" + orgId).findAll({
      where: {
        amountRelevant: true,
        accountNumber: accountNumber,
        ProcedureId: prcId,
      },
      attributes: [
        "id",
        "procedureId",
        "accountNumber",
        "accountName",
        "amountRelevant",
        "amountRelevantComment",
        "accountType",
        "documentType",
        "balance",
        "contraAccountNumber",
        "contraAccountName",
        "documentTypeNewName",
        "documentNumber",
        "documentDate",
        "recordNumber",
        "ledgerId",
        "executionDate",
        "dueDate",
      ],
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.susaDateRange = async (orgId, prcId) => {
  try {
    let query = `SELECT MAX(documentDate)  maxdate, MIN(documentDate) mindate from posting_${orgId} pos
                        WHERE
                            pos.procedureId = :procedureId
                            AND pos.accountNumber is not NULL`;

    const result = await sequelize.query(query, {
      replacements: {
        procedureId: prcId,
      },
      type: QueryTypes.SELECT,
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.susaAnalysis = async (
  orgId,
  prcId,
  fromDate,
  toDate,
  criteria
) => {
  try {
    let query = `SELECT DISTINCT pos.accountType, pos.accountNumber, pos.accountName, 
        fromRange.famount, inRange.inamount , credit.creditAmount, debit.debitAmount,
        (fromRange.famount + inRange.inamount) outamount
        FROM posting_${orgId} pos 
        LEFT OUTER JOIN
            ( SELECT p.accountNumber , p.accountName , SUM(p.balance) famount
                FROM venator.posting_${orgId} p 
                WHERE
                    p.procedureId = :procedureId
                    AND p.accountNumber is not NULL 
                    AND  p.documentDate <  :fromDate
                GROUP BY p.accountNumber , p.accountName) as fromRange
            ON pos.accountNumber = fromRange.accountNumber
            left OUTER JOIN 
            ( select p2.accountNumber , p2.accountName , SUM(p2.balance) inamount
                FROM venator.posting_${orgId} p2
                WHERE
                    p2.procedureId = :procedureId
                    AND p2.accountNumber is not NULL 
                    AND  p2.documentDate >  :fromDate
                    AND  p2.documentDate <  :toDate 
                GROUP BY p2.accountNumber , p2.accountName
            ) as inRange 
        ON pos.accountNumber = inRange.accountNumber
        
        left OUTER JOIN 
            ( select p4.accountNumber , p4.accountName , SUM(p4.balance) creditAmount
                FROM venator.posting_${orgId} p4
                WHERE
                    p4.procedureId = :procedureId
                    AND p4.accountNumber is not NULL 
                    AND p4.balance > 0
                    AND  p4.documentDate >  :fromDate
                    AND  p4.documentDate <  :toDate 
                GROUP BY p4.accountNumber , p4.accountName
            ) as credit 
        ON pos.accountNumber = credit.accountNumber
        
        left OUTER JOIN 
            ( select p5.accountNumber , p5.accountName , SUM(p5.balance) debitAmount
                FROM venator.posting_${orgId} p5
                WHERE
                    p5.procedureId = :procedureId
                    AND p5.accountNumber is not NULL
                    AND p5.balance < 0
                    AND  p5.documentDate >  :fromDate
                    AND  p5.documentDate <  :toDate 
                GROUP BY p5.accountNumber , p5.accountName
            ) as debit 
        ON pos.accountNumber = debit.accountNumber
        
        
        WHERE
                    pos.procedureId = :procedureId
                    AND pos.accountNumber is not NULL 
                                `;

    let orderBy = criteria.orderBy ? criteria.orderBy : "accountNumber";
    orderBy =
      orderBy == "accountNumber"
        ? "LPAD(LOWER(pos.accountNumber), 10,0) "
        : orderBy;
    delete criteria.orderBy;
    const sortOrder = criteria.sortOrder == -1 ? "DESC" : "ASC";
    delete criteria.sortOrder;

    for (const key in criteria) {
      if (Object.hasOwnProperty.call(criteria, key)) {
        if (criteria[key].toString().length > 2) {
          query += ` AND pos.${key} like '%${criteria[key]}%'`;
          criteria[key] = {
            [Op.like]: "%" + criteria[key] + "%",
          };
        } else {
          query += ` AND pos.${key} = '${criteria[key]}'`;
        }
      }
    }

    query += ` order by ${orderBy} ${sortOrder}`;

    const result = await sequelize.query(query, {
      replacements: {
        procedureId: prcId,
        fromDate: fromDate,
        toDate: toDate,
      },
      type: QueryTypes.SELECT,
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
