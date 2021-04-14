const dbConfig = require('../config.js').db;
const mongoose = require('mongoose');

class DbConnectionService {
    constructor() {}

    static getConnection() {
        if(! DbConnectionService.db) {
            mongoose.connect(dbConfig.url, { useNewUrlParser: true });
            DbConnectionService.db = mongoose.connection;
        }
        return DbConnectionService.db;
    }
}

module.exports = DbConnectionService;