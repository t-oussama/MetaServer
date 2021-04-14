const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DomainModel = mongoose.model('Domain', new Schema({
    label: {type: String, required: [true, 'label is required']},
    icon: {type: String},
    regions: [{ 
        type: Schema.ObjectId, 
        ref: 'Region' }],
}, {
    strict: true
})
);

module.exports = DomainModel;