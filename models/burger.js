module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    }, {
        timestamps: false
    });
    return Burger;
};