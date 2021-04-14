var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DomainModel = mongoose.model('Region', new Schema({
    label: {type: String, required: [true, 'label is required']},
    geoPath: {type: String, required: [true, 'geoPath is required']},
    domains: [{
        type: Schema.ObjectId, 
        ref: 'Domain'
    }],
    mapData: {
        zoom: {type: Number},
        lon: {type: Number},
        lat: {type: Number},
    }
}, {
    strict: true
})
);

module.exports = DomainModel;