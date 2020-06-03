const orm = require("../config/orm.js");

//using the orm to manipulate table data
const burger = {
  all: async () => {
    const result = await orm.all("burgers");

    return result;
  },

  create: async (cols, vals) => {
    const result = await orm.create("burgers", cols, vals);

    return result;
  },

  update: async (objColVals, condition) => {
    const result = await orm.update("burgers", objColVals, condition);

    return result;
  },

  delete: async (condition) => {
    const result = await orm.delete("burgers", condition);

    return result;
  }
};

module.exports = burger;
