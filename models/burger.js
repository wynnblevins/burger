const connection = require('../config/connection.js');
var Sequelize = require("sequelize");

const Burger = connection.define('burger', {
    devoured: Sequelize.BOOLEAN,
    burger_name: Sequelize.STRING
});
connection.sync();

module.exports = Burger;