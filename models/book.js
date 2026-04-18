'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Author, {
        foreignKey: 'authorId',
        as: 'author'
      });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    publishedYear: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};