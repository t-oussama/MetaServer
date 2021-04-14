const GenericController = require('../../core/GenericController');
const resourceRepository = require('./ResourceRepository');

class ResourceController extends GenericController {
    constructor() {
        super(resourceRepository, 'Resource');
    }
}

module.exports = new ResourceController();