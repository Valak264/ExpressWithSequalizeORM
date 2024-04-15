const { sequelize, DataTypes } = require('./sequelize');

const Book = sequelize.define('Book', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publisher: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
});

module.exports = { Book };
