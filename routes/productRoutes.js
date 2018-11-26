const express = require("express");
const ProductsRouter = express.Router();
const productOperations = require("../db/operations/productOperations");

// Getting home Products

ProductsRouter.get("/getMobileProducts", (req, res) => {
  productOperations.getMobileProducts(res);
});

ProductsRouter.get("/getShoeProducts", (req, res) => {
  productOperations.getShoeProducts(res);
});

ProductsRouter.get("/getWomensWearProducts", (req, res) => {
  productOperations.getWomensWearProducts(res);
});

ProductsRouter.get("/getTVsProducts", (req, res) => {
  productOperations.getTVsProducts(res);
});

ProductsRouter.get("/getToysProducts", (req, res) => {
  productOperations.getToysProducts(res);
});

ProductsRouter.get("/getFurnituresProducts", (req, res) => {
  productOperations.getFurnituresProducts(res);
});

module.exports = ProductsRouter;
