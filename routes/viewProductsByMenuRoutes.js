const express = require("express");
const viewProductByMenuRouter = express.Router();
const viewProductByMenuOperations = require("../db/operations/viewProductByMenuOperations");

viewProductByMenuRouter.get("/:MainMenu/:SubMenu", (req, res) => {
  const detailsObject = {
    MainMenu: req.params.MainMenu,
    SubMenu: req.params.SubMenu,
    Query: req.query
  };
  viewProductByMenuOperations.getProductsByMenu(detailsObject, req, res);
});

module.exports = viewProductByMenuRouter;
