const express = require("express");
const checkAvailibilityRouter = express.Router();
const checkAvailibilityOperations = require("../db/operations/checkAvailibilityOperations");

checkAvailibilityRouter.post("/", (req, res) => {
  checkAvailibilityOperations.checkAvailibility(req.body.productID, res);
});

module.exports = checkAvailibilityRouter;
