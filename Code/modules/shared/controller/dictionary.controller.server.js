const dictRepo = require("../../../repositories/dict.repository.server");

module.exports.fetch = async (req, res, next) => {
  const result = await dictRepo.complete(req.params.word);
  res.status(200).json(result);
};
