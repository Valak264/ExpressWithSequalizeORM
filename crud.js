/* eslint-disable no-console */

const { sequelize } = require('./sequelize');

const insert = async (model, data) => {
  await sequelize.authenticate();
  await model.sync();
  await model.create(data);
};

const selectAll = async (model) => {
  await sequelize.authenticate();
  await model.sync();
  const data = await model.findAll();
  return data;
};

const selectOne = async (model, id) => {
  await sequelize.authenticate();
  await model.sync();
  const data = await model.findAll({
    where: {
      id,
    },
  });
  return data;
};

const edit = async (model, id, data) => {
  await sequelize.authenticate();
  await model.sync();
  await model.update(data, {
    where: {
      id,
    },
  });
};

const deleteOne = async (model, id) => {
  await sequelize.authenticate();
  await model.sync();
  await model.destroy({
    where: {
      id,
    },
  });
};

module.exports = {
  insert,
  selectAll,
  selectOne,
  edit,
  deleteOne,
};
