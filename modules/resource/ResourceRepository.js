var mongoose = require('mongoose');
var ResourceModel = require('./ResourceModel');
var GenericRepository = require('../../core/GenericRepository');

class ResourceRepository extends GenericRepository{
    constructor(){
        super(ResourceModel);
    }
}
module.exports = new ResourceRepository();