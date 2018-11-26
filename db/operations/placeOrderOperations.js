const Users = require("../schemas/UserSchema");
const Electronics = require("../schemas/products/ElectronicsSchema");
const TVs = require("../schemas/products/TVsSchema");
const Men = require("../schemas/products/MenSchema");
const Women = require("../schemas/products/WomenSchema");
const Baby = require("../schemas/products/BabySchema");
const Furnitures = require("../schemas/products/FurnituresSchema");

const placeOrderOperations = {
  placeOrderNow(userID, cartProducts, orderDate, req, res) {
    Users.findById(userID, (err, doc) => {
      if (err) {
        return res.status(404).send("Unable to book this order.");
      } else {
        if (doc.address == "") {
          return res.status(200).send("Please fill the address details.");
        }
        cartProducts.forEach(cartProduct => {
          if (cartProduct.menu == "Electronics") {
            this.IncreasePurchasedElectronics(
              cartProduct.productID,
              cartProduct.quantity
            );
          }
          if (cartProduct.menu == "TVs") {
            this.IncreasePurchasedTVs(
              cartProduct.productID,
              cartProduct.quantity
            );
          }
          if (cartProduct.menu == "Men") {
            this.IncreasePurchasedMen(
              cartProduct.productID,
              cartProduct.quantity
            );
          }
          if (cartProduct.menu == "Women") {
            this.IncreasePurchasedWomen(
              cartProduct.productID,
              cartProduct.quantity
            );
          }
          if (cartProduct.menu == "Baby") {
            this.IncreasePurchasedBaby(
              cartProduct.productID,
              cartProduct.quantity
            );
          }
          if (cartProduct.menu == "Furnitures") {
            this.IncreasePurchasedFurnitures(
              cartProduct.productID,
              cartProduct.quantity
            );
          }
          cartProduct.address = doc.address;
          cartProduct.status = "Pending";
          cartProduct.orderDate = orderDate;
          doc.orders.push(cartProduct);
        });
        doc.save(() => {
          req.session.cart = [];
          return res.status(200).send("Order Successfull");
        });
      }
    });
  },
  IncreasePurchasedElectronics(productID, Quantity) {
    Electronics.findById(productID, (err, doc) => {
      if (err) {
        console.log("Error: In increasing purchasing number times");
      } else {
        doc.purchased += Quantity;
        doc.save();
      }
    });
  },
  IncreasePurchasedTVs(productID, Quantity) {
    TVs.findById(productID, (err, doc) => {
      if (err) {
        console.log("Error: In increasing purchasing number times");
      } else {
        doc.purchased += Quantity;
        doc.save();
      }
    });
  },
  IncreasePurchasedMen(productID, Quantity) {
    Men.findById(productID, (err, doc) => {
      if (err) {
        console.log("Error: In increasing purchasing number times");
      } else {
        doc.purchased += Quantity;
        doc.save();
      }
    });
  },
  IncreasePurchasedWomen(productID, Quantity) {
    Women.findById(productID, (err, doc) => {
      if (err) {
        console.log("Error: In increasing purchasing number times");
      } else {
        doc.purchased += Quantity;
        doc.save();
      }
    });
  },
  IncreasePurchasedBaby(productID, Quantity) {
    Baby.findById(productID, (err, doc) => {
      if (err) {
        console.log("Error: In increasing purchasing number times");
      } else {
        doc.purchased += Quantity;
        doc.save();
      }
    });
  },
  IncreasePurchasedFurnitures(productID, Quantity) {
    Furnitures.findById(productID, (err, doc) => {
      if (err) {
        console.log("Error: In increasing purchasing number times");
      } else {
        doc.purchased += Quantity;
        doc.save();
      }
    });
  }
};

module.exports = placeOrderOperations;
