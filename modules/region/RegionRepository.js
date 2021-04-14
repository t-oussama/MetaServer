const mongoose = require('mongoose');
const RegionModel = require('./RegionModel');
const GenericRepository = require('../../core/GenericRepository');
const domainRepository = require('../domain/DomainRepository');
const DomainModel = require('../domain/DomainModel');

class RegionRepository extends GenericRepository{
    constructor(){
        super(RegionModel);
    }

    store(region) {
        return super.store(region).then(result => {
            return new Promise((resolve, reject) => {
                result.domains.forEach(domainID => {
                    DomainModel.findById(domainID, (err, domain) => {
                        domain.regions.push(result._id);
                        domain.save();
                    });
                });

                return resolve(result);
            });
        });
    }

    delete(id) {
        return super.delete(id).then(result => {
            return new Promise((resolve, reject) => {
                result.domains.forEach(domainID => {
                    DomainModel.findById(domainID, (err, domain) => {
                        if(err) console.log('err', err);
                        if(domain) {
                            domain.regions.splice(domain.regions.indexOf(result._id), 1);
                            domain.save();
                        }
                    });
                });

                return resolve(result);
            });
        });
    }
}
module.exports = new RegionRepository();