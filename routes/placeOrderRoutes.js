const express = require("express");
const placeOrderRouter = express.Router();
const placeOrderOperations = require("../db/operations/placeOrderOperations");

placeOrderRouter.post("/", (req, res) => {
  let orderDate = req.body.orderDate;
  if (req.session && req.session.userID) {
    let userID = req.session.userID;
    placeOrderOperations.placeOrderNow(
      userID,
      req.session.cart,
      orderDate,
      req,
      res
    );
  } else {
    return res.status(200).send("DoLogin");
  }
});

module.exports = placeOrderRouter;
