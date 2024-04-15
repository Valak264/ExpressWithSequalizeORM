/* eslint-disable no-console */

const { sequelize } = require('./sequelize');

const insert = async (model, data) => {
  try {
    await sequelize.authenticate();
    await model.sync();
    await model.create(data);
  } catch (error) {
    console.error(`Error : ${error.message}`);
  }
};

const selectAll = async (model) => {
  try {
    await sequelize.authenticate();
    await model.sync();
    const data = await model.findAll();
    return data;
  } catch (error) {
    return error.message;
  }
};

const selectOne = async (model, id) => {
  try {
    await sequelize.authenticate();
    await model.sync();
    const data = await model.findAll({
      where: {
        id,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

const edit = async (model, id, data) => {
  try {
    await sequelize.authenticate();
    await model.sync();
    await model.update(data, {
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

const deleteOne = async (model, id) => {
  try {
    await sequelize.authenticate();
    await model.sync();
    await model.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  insert,
  selectAll,
  selectOne,
  edit,
  deleteOne,
};
