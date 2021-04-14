const GenericController = require('../../core/GenericController');
const resourcesMapRepository = require('./ResourcesMapRepository');

class ResourcesMapController extends GenericController {
    constructor() {
        super(resourcesMapRepository, 'ResourcesMap');
    }
}

module.exports = new ResourcesMapController();