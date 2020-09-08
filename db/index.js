const SEQUELIZE = require('sequelize');
const CONFIG = require('../config/config.json');


const defaultConfig = CONFIG.development;
const sequelize = new SEQUELIZE(defaultConfig.database, defaultConfig.username, defaultConfig.password, {
    host : defaultConfig.host,
    dialect : defaultConfig.dialect
});

const db ={};

db.SEQUELIZE = SEQUELIZE;
db.sequelize = sequelize;
db.Usuario = require('../usuario/Usuario.model')(sequelize,SEQUELIZE);

module.exports = db;



