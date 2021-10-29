const websiteRepo = require('../../../repositories/website.repo.server');
const env = require('../../../config/environment');

module.exports.get = async (req, res) => {
    const result = await websiteRepo.fetchAll();
    res.status(200).json(result);
};

//#region slider
module.exports.updateSlider = async (req, res) => {
    const files = req.files;
    const data = JSON.parse(req.body.data);
    const changedFiles = data.files;
    if (files[0]) {
        if (changedFiles[0]) {
            switch (changedFiles[0]) {
                case 2:
                    data.sliderImg2 = env.domain + 'public/imgs/' + files[0].filename;
                    // delete old first image
                    break;
                case 3:
                    data.sliderImg3 = env.domain + 'public/imgs/' + files[0].filename;
                    break;
                default:
                    data.sliderImg1 = env.domain + 'public/imgs/' + files[0].filename;
            }
        } else data.sliderImg1 = env.domain + 'public/imgs/' + files[0].filename;
    }
    if (files[1]) {
        if (changedFiles[1]) {
            switch (changedFiles[1]) {
                case 1:
                    data.sliderImg1 = env.domain + 'public/imgs/' + files[1].filename;
                    break;
                case 3:
                    data.sliderImg3 = env.domain + 'public/imgs/' + files[1].filename;
                    break;
                default:
                    data.sliderImg2 = env.domain + 'public/imgs/' + files[1].filename;
            }
        } else data.sliderImg2 = env.domain + 'public/imgs/' + files[1].filename;
    }
    if (files[2]) {
        if (changedFiles[2]) {
            switch (changedFiles[2]) {
                case 1:
                    data.sliderImg1 = env.domain + 'public/imgs/' + files[2].filename;
                    break;
                case 2:
                    data.sliderImg2 = env.domain + 'public/imgs/' + files[2].filename;
                    break;
                default:
                    data.sliderImg3 = env.domain + 'public/imgs/' + files[2].filename;
            }
        } else data.sliderImg3 = env.domain + 'public/imgs/' + files[2].filename;
    }
    const result = await websiteRepo.update(data);
    res.status(201).json(result);
}
//#endregion slider

//#region our services
module.exports.getServicesItems = async (req, res) => {
    const result = await websiteRepo.getServicesItems();
    res.status(200).json(result);
};

module.exports.deleteServicesItem = async (req, res) => {
    const { id } = req.params;
    const result = await websiteRepo.deleteServicesItem(id);
    res.status(204).json({});
}

module.exports.updateServicesItem = async (req, res) => {
    const file = req.file;
    const data = JSON.parse(req.body.data);
    if (file) {
        data.img = env.domain + 'public/imgs/' + file.filename;
        // delete old image
    }
    const result = await websiteRepo.saveServicesItem(data);
    res.status(201).json(result);
}
//#endregion our services

//#region About
module.exports.updateAbout = async (req, res) => {
    const file = req.file;
    const data = JSON.parse(req.body.data);
    if (file) {
        data.aboutImg = env.domain + 'public/imgs/' + file.filename;
        // delete old first image
    }
    const result = await websiteRepo.update(data);
    res.status(201).json(result);
}

module.exports.getAboutItems = async (req, res) => {
    const result = await websiteRepo.getAboutItems();
    res.status(200).json(result);
};

module.exports.deleteAboutItem = async (req, res) => {
    const { id } = req.params;
    const result = await websiteRepo.deleteAboutItem(id);
    res.status(204).json({});
}

module.exports.updateAboutItem = async (req, res) => {
    const data = req.body;
    const result = await websiteRepo.saveAboutItem(data);
    res.status(201).json(result);
}
//#endregion About

module.exports.update = async (req, res) => {
    const data = req.body;
    const result = await websiteRepo.update(data);
    res.status(201).json(result);
}

//#region Social links
module.exports.getSocialLinks = async (req, res) => {
    const result = await websiteRepo.getSocialLinks();
    res.status(200).json(result);
};

module.exports.saveSocialLinks = async (req, res) => {
    const data = req.body;
    const result = await websiteRepo.saveSocialLinks(data);
    res.status(201).json(result);
};

module.exports.deleteSocialLink = async (req, res) => {
    const { id } = req.params;
    const result = await websiteRepo.deleteSocialLink(id);
    res.status(204).json({});
};
//#endregion social links