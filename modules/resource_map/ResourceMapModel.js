var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ResourceMapModel = mongoose.model('ResourceMap', new Schema({
    hash: {type: String, required: [true, 'hash is required']},
    resources: [{ 
        type: Schema.ObjectId, 
        ref: 'Resource' 
    }],
}, {
    strict: true
})
);

module.exports = ResourceMapModel;