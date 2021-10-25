const websiteRepo = require('../../../repositories/website.repo.server');
const env = require('../../../config/environment');
const path = require('path');

module.exports.get = async (req, res) => {
    const result = await websiteRepo.fetchAll();
    res.status(200).json(result);
};

module.exports.updateSlider = async (req, res) => {
    const files = req.files;
    const data = JSON.parse(req.body.data);
    if (files[0]) {
        data.sliderImg1 = env.domain + 'public/imgs/' + files[0].filename;
        // delete old first image
    }
    if (files[1]) {
        data.sliderImg2 = env.domain + 'public/imgs/' + files[1].filename;
        // delete old first image
    }
    if (files[2]) {
        data.sliderImg3 = env.domain + 'public/imgs/' + files[2].filename;
        // delete old first image
    }
    const result = await websiteRepo.update(data);
    res.status(201).json(result);
}