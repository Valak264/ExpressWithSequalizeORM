const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');

const sequelize = new Sequelize('express_orm', 'root', null, {
  host: 'localhost',
  dialect: 'mariadb',
});

module.exports = { sequelize, DataTypes, express };
