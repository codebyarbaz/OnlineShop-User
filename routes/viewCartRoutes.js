const express = require("express");
const viewCartRouter = express.Router();

viewCartRouter.get("/", (req, res) => {
  if (req.session && req.session.userID) {
    res
      .status(200)
      .render("viewCart.ejs", { products: req.session.cart, session: "true" });
  } else {
    res
      .status(200)
      .render("viewCart.ejs", { products: req.session.cart, session: "false" });
  }
});

viewCartRouter.get("/removeProduct/:productID", (req, res) => {
  if (req.session && req.session.cart) {
    req.session.cart.forEach(cartProduct => {
      if (cartProduct.productID == req.params.productID) {
        const removeProduct = req.session.cart.indexOf(cartProduct);
        if (removeProduct > -1) {
          req.session.cart.splice(removeProduct, 1);
          res.status(200).redirect("/viewCart");
        }
      }
    });
  }
});

viewCartRouter.post("/IncreaseQuantity", (req, res) => {
  let productID = req.body.productID;
  req.session.cart.forEach(cartProduct => {
    if (cartProduct.productID == productID) {
      cartProduct.quantity += 1;
      return res.status(200).send("Increased");
    }
  });
});

viewCartRouter.post("/DecreaseQuantity", (req, res) => {
  let productID = req.body.productID;
  req.session.cart.forEach(cartProduct => {
    if (cartProduct.productID == productID) {
      if (cartProduct.quantity > 1) {
        cartProduct.quantity -= 1;
        return res.status(200).send("Decreased");
      }
    }
  });
});

module.exports = viewCartRouter;
