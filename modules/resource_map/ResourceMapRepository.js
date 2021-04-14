var mongoose = require('mongoose');
var ResourceMapModel = require('./ResourceMapModel');
var GenericRepository = require('../../core/GenericRepository');

class ResourceMapRepository extends GenericRepository{
    constructor(){
        super(ResourceMapModel);
    }
}
module.exports = new ResourceMapRepository();