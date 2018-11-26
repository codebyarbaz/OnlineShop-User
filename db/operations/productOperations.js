const Electronics = require("../schemas/products/ElectronicsSchema");
const TVs = require("../schemas/products/TVsSchema");
const Men = require("../schemas/products/MenSchema");
const Women = require("../schemas/products/WomenSchema");
const Baby = require("../schemas/products/BabySchema");
const Furnitures = require("../schemas/products/FurnituresSchema");

const allProduct = require("../schemas/allProductsSchema");

const productOperations = {
  getMobileProducts(res) {
    let ItemsPerCategory = 5;
    allProduct
      .find({ menu: "Electronics", submenu: "Mobiles" }, (err, docs) => {
        if (err) {
          return res.send("Error: In getting ElectronicsProducts from DB");
        } else {
          return res.json(docs);
        }
      })
      .limit(ItemsPerCategory);
  },
  getShoeProducts(res) {
    let ItemsPerCategory = 5;
    allProduct
      .find({ menu: "Men", submenu: "Footwear" }, (err, docs) => {
        if (err) {
          return res.send("Error: In getting ElectronicsProducts from DB");
        } else {
          return res.json(docs);
        }
      })
      .limit(ItemsPerCategory);
  },
  getWomensWearProducts(res) {
    let ItemsPerCategory = 5;
    allProduct
      .find({ menu: "Women", submenu: "Western Wear" }, (err, docs) => {
        if (err) {
          return res.send("Error: In getting ElectronicsProducts from DB");
        } else {
          return res.json(docs);
        }
      })
      .limit(ItemsPerCategory);
  },
  getTVsProducts(res) {
    let ItemsPerCategory = 5;
    allProduct
      .find({ menu: "TVs", submenu: "Television" }, (err, docs) => {
        if (err) {
          return res.send("Error: In getting ElectronicsProducts from DB");
        } else {
          return res.json(docs);
        }
      })
      .limit(ItemsPerCategory);
  },
  getToysProducts(res) {
    let ItemsPerCategory = 5;
    allProduct
      .find({ menu: "Baby", submenu: "Toys" }, (err, docs) => {
        if (err) {
          return res.send("Error: In getting ElectronicsProducts from DB");
        } else {
          return res.json(docs);
        }
      })
      .limit(ItemsPerCategory);
  },
  getFurnituresProducts(res) {
    let ItemsPerCategory = 5;
    allProduct
      .find({ menu: "Furnitures", submenu: "Furniture" }, (err, docs) => {
        if (err) {
          return res.send("Error: In getting ElectronicsProducts from DB");
        } else {
          return res.json(docs);
        }
      })
      .limit(ItemsPerCategory);
  }
};

module.exports = productOperations;
