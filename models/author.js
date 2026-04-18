'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.hasMany(models.Book, {
        foreignKey: 'authorId',
        as: 'books'
      });
    }
  }
  Author.init({
    name: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};