module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
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
    return Burger;
};