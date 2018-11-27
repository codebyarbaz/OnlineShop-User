const express = require("express");

const TestingRouter = express.Router();

const Users = require("../db/schemas/UserSchema");
const allProducts = require("../db/schemas/allProductsSchema");

TestingRouter.get("/", async (req, res, next) => {
  allProducts
    .findById("5bfb900e3772d90e0797dfaa")
    .then(doc => {
      console.log(doc);
      res.json(doc);
    })
    .catch();
  // try {
  //   const user = await allProducts.find({ title: { $regex: `apple` } });
  //   res.status(200).json(user);
  // } catch (err) {
  //   console.log(err);
  // }
});

module.exports = TestingRouter;
