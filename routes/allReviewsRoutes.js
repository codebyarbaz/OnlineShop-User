const express = require("express");
const allReviewsRouter = express.Router();
const allReviewsOperations = require("../db/operations/allReviewsOperations");

allReviewsRouter.get("/:menu/:productName/:productID", (req, res) => {
  let ID = req.params.productID;
  allReviewsOperations.getAllReviews(ID, req, res);
});

module.exports = allReviewsRouter;
