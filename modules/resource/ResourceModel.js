var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ResourceModel = mongoose.model('Resource', new Schema({
    label: {type: String, required: [true, 'label is required']},
    type: {type: String, required: [true, 'type is required']},
    url: {type: String, required: [true, 'url is required']},
    mappingHashes: [{ 
        type: Schema.ObjectId, 
        ref: 'ResourcesMap' }],
    mapData: {
        zoom: {type: Number},
        lon: {type: Number},
        lat: {type: Number},
    },
    active: {type: boolean, default: false},
    details: {type: Schema.Types.Mixed}
}, {
    strict: true
})
);

module.exports = ResourceModel;