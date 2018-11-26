const express = require("express");
const searchProductsRouter = express.Router();
const searchProductsOperations = require("../db/operations/searchProductsOperations");

searchProductsRouter.get("/", (req, res) => {
  let details = req.query;
  searchProductsOperations.productsByQuery(details, req, res);
});

module.exports = searchProductsRouter;
