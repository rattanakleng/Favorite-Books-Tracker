module.exports = function (sequelized, DataTypes) {
    let Books = sequelize.define("Books", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [255]
            }
        },
        
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [255]
            }
        },
        publishyear: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [4]
            }
        }
    });

    return Books;
}