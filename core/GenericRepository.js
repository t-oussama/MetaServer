const DbConnectionService = require('./services/DbConnectionService');

class GenericRepository{
    constructor(ModelClass) {
        this.ModelClass = ModelClass;
        this.db = DbConnectionService.getConnection();
    }

    all(){
        return new Promise((resolve, reject) => {
            this.ModelClass.find({}, function(err, res){
                if (err) reject(err);
                return resolve(res);
            });
        });
    };

    find(id){
        return new Promise((resolve, reject) => {
            this.ModelClass.findById(id, function(err, res){
                if (err) reject(err);
                return resolve(res);
            });
        });
    };

    store(model){
        if(model._id)
            delete model._id;
        return new Promise((resolve, reject) => {
            this.ModelClass.create(model, function(err, res) {
                if (err) reject(err);
                return resolve(res);
                });
        });
    };

    update(id, model){
        if(model._id)
            delete model._id;
        return new Promise((resolve, reject) => {
            return this.find(id).then(result => {
                result.set(model);
                result.save((err, res) => {
                    if (err) reject(err);
   
                    return resolve(res);
                });
            }).catch( () => {
                return reject();
            });
            
        });
    }

    delete(id){
        return new Promise((resolve, reject) => {
            return this.find(id).then(result => {
                result.remove((err, res) => {
                    if (err) reject(err);
   
                    return resolve(result);
                });
            }).catch( () => {
                return reject();
            });
            
        });
    }

    
}

module.exports = GenericRepository;