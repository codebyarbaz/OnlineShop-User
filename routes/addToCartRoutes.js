const express = require("express");
const addToCartRouter = express.Router();

addToCartRouter.post("/", (req, res) => {
  if (req.session && req.session.cart) {
    req.session.cart.forEach(cartProduct => {
      if (cartProduct.productID == req.body.productID) {
        return res.status(200).send("Already Added");
      } else {
        req.session.cart.push({
          productID: req.body.productID,
          menu: req.body.menu,
          submenu: req.body.submenu,
          title: req.body.title,
          price: req.body.price,
          discount: req.body.discount,
          image: req.body.image,
          quantity: 1
        });
        return res.status(200).send("Product Added To Cart");
      }
    });
  } else {
    req.session.cart = [
      {
        productID: req.body.productID,
        menu: req.body.menu,
        submenu: req.body.submenu,
        title: req.body.title,
        price: req.body.price,
        discount: req.body.discount,
        image: req.body.image,
        quantity: 1
      }
    ];
    return res.status(200).send("Product Added To Cart");
  }
});

module.exports = addToCartRouter;
