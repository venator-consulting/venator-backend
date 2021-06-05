const errorHandler = require('../../../helpers/error.handler.server').errorHandler;
const dictRepo = require('../../../repositories/dict.repository.server');


module.exports.fetch = async (req, res) => {
    try {
        const result = await dictRepo.complete(req.params.word);
        res
            .status(200)
            .json(result);
    } catch (error) {
        errorHandler('posting data controller: fetch data', error);
        res.status(500).json(error);
    }
};