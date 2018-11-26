const express = require("express");
const viewProductRouter = express.Router();
const viewProductsOperations = require("../db/operations/viewProductsOperations");

viewProductRouter.get("/:menu/:subMenu/:productName/:productID", (req, res) => {
  let productID = req.params.productID;
  viewProductsOperations.getProductbyID(productID, req, res);
});

module.exports = viewProductRouter;
