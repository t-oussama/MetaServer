const errorHandler = require('../core/ErrorHandler');

class GenericController {
    constructor(modelRepository, modelName = 'element') {
        this.modelRepository = modelRepository;
        this.messages = {
            'Not Found': `${modelName} Not Found`,
            'Created Successfully': `${modelName} Created Successfully`,
            'Updated Successfully': `${modelName} updated Successfully`,
            'Deleted Successfully': `${modelName} Deleted Successfully`,
            };

        this.index = this.index.bind(this)
        this.get = this.get.bind(this)
        this.store = this.store.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    index (request, response) {
        this.modelRepository.all().then( res => {
            let models = res;
            const responseBody = {
                message: '',
                data: [models]
            };

        return response.json(responseBody);
        });
    }

    get (request, response) {
        this.modelRepository.find(request.params.id).then(res => {
            if(!res){
                const responseBody = {
                    message: this.messages['Not Found'],
                    data: null
                };
                return response.status(404).json(responseBody);
            }

            let model = res;
            const responseBody = {
                message: '',
                data: model
            };

            return response.json(responseBody);
        });
    }

    store (request, response) {
        const req_data = request.body;
        this.modelRepository.store(req_data).then(model => {
            const responseBody = {
                message: this.messages['Created Successfully'],
                data: model
            };
    
            return response.status(201).json(responseBody); 
        }).catch(err => {
            var data = errorHandler.handle(err);
            return response.status(data.statusCode).json(data.responseBody);
        });
    }

    update (request, response) {
        const req_data = request.body;

        this.modelRepository.update(request.params.id, req_data).then( (res) => {
            const responseBody = {
                message: this.messages['Updated Successfully'],
                data: res
            };
    
            return response.json(responseBody); 
        }).catch(err => {
            const responseBody = {
                message: this.messages['Not Found'],
                data: null
            };
            response.status(404).send(responseBody);   
        });
    }

    delete (request, response) {
        this.modelRepository.delete(request.params.id).then( () => {
            const responseBody = {
                message: this.messages['Deleted Successfully'],
                data: null
            }
    
            response.json(responseBody);
        }).catch( () => {
            const responseBody = {
                message: this.messages['Not Found'],
                data: null
            }
            return response.status(404).json(responseBody);
        });
    }
};

module.exports = GenericController;