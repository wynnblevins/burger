const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Burger = connection.define('burger', {
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
};