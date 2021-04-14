const GenericController = require('../../core/GenericController');
const domainRepository = require('./DomainRepository');

class DomainController extends GenericController {
    constructor() {
        super(domainRepository, 'Domain');
    }
}

module.exports = new DomainController();