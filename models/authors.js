module.exports = (sequelize, DataType) {
    var Author = sequelize.define("author", {
        // Giving the Author model a name of type STRING
        name: DataTypes.STRING
    });
    // Associating Author with Posts, create foreing key
    // When an Author is deleted, also delete any associated Posts
    Author.associate = (models) => {
        Author.hasMany(models.Books, {
            onDelete: "cascade"
        });
    };

    return Author;
};
