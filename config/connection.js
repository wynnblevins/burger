const Sequelize = require('sequelize');

const connection = new Sequelize('burger_db', 'root', 'Nowuckinfurries3612', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = connection;