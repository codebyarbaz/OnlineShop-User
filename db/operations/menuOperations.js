const menus = require("../schemas/menuSchema");

const menuOperations = {
  getmenus(res) {
    menus.find((err, docs) => {
      if (err) {
        res.send(err);
      } else {
        res.send(docs);
      }
    });
  }
};

module.exports = menuOperations;
