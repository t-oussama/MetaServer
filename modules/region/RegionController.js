const GenericController = require('../../core/GenericController');
const regionRepository = require('./RegionRepository');

class RegionController extends GenericController {
    constructor() {
        super(regionRepository, 'Region');
    }
}

module.exports = new RegionController();