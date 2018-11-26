const Electronics = require("../schemas/submenus/Electronics");
const TVs = require("../schemas/submenus/TVs");
const Men = require("../schemas/submenus/Men");
const Women = require("../schemas/submenus/Women");
const Baby = require("../schemas/submenus/Baby");
const Furnitures = require("../schemas/submenus/Furnitures");

const subMenuOperations = {
  showSubMenus(menuObject, res) {
    if (menuObject.menu == "Electronics") {
      Electronics.find((err, docs) => {
        if (err) {
          res.send("Error in Electronics submenus");
        } else {
          res.send(docs);
        }
      });
    }
    if (menuObject.menu == "TVs") {
      TVs.find((err, docs) => {
        if (err) {
          res.send("Error in Electronics submenus");
        } else {
          res.send(docs);
        }
      });
    }
    if (menuObject.menu == "Men") {
      Men.find((err, docs) => {
        if (err) {
          res.send("Error in Electronics submenus");
        } else {
          res.send(docs);
        }
      });
    }
    if (menuObject.menu == "Women") {
      Women.find((err, docs) => {
        if (err) {
          res.send("Error in Electronics submenus");
        } else {
          res.send(docs);
        }
      });
    }
    if (menuObject.menu == "Baby") {
      Baby.find((err, docs) => {
        if (err) {
          res.send("Error in Electronics submenus");
        } else {
          res.send(docs);
        }
      });
    }
    if (menuObject.menu == "Furnitures") {
      Furnitures.find((err, docs) => {
        if (err) {
          res.send("Error in Electronics submenus");
        } else {
          res.send(docs);
        }
      });
    }
  }
};

module.exports = subMenuOperations;
