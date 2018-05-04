const Sequelize = require('sequelize');

var connection = new Sequelize('burger_db', 'root', 'Nowuckinfurries3612', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

var Burger = connection.define('burger', {
    devoured: Sequelize.BOOLEAN,
    burger_name: Sequelize.STRING
});

connection.sync();

module.exports = Burger;