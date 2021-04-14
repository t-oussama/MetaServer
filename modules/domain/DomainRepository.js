const mongoose = require('mongoose');
const DomainModel = require('./DomainModel');
const regionRepository = require('../region/RegionRepository');
const RegionModel = require('../region/RegionModel');
const GenericRepository = require('../../core/GenericRepository');

class DomainRepository extends GenericRepository{
    constructor() {
        super(DomainModel);
    }

    store(domain) {
        return super.store(domain).then(result => {
            return new Promise((resolve, reject) => {
                result.regions.forEach(regionID => {
                    RegionModel.findById(regionID, (err, region) => {
                        region.domains.push(result._id);
                        region.save();
                    });
                });
                return resolve(result);
            });
        });
    }

    // update(id, domain) {

    // }

    delete(id) {
        return super.delete(id).then(result => {
            return new Promise((resolve, reject) => {
                result.regions.forEach(regionID => {
                    RegionModel.findById(regionID, (err, region) => {
                        if(err) console.log('err', err);
                        if(region) {
                            region.domains.splice(region.domains.indexOf(result._id), 1);
                            region.save();
                        }
                    });
                });

                return resolve(result);
            });
        });
    }
}
module.exports = new DomainRepository();