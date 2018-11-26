const express = require("express");
const menuRouter = express.Router();
const menuOperations = require("../db/operations/menuOperations");
const subMenuOperations = require("../db/operations/submenuOperations");

menuRouter.get("/getmenus", (req, res, next) => {
  menuOperations.getmenus(res);
});

menuRouter.post("/getsubmenus", (req, res, next) => {
  let menuObject = req.body;
  subMenuOperations.showSubMenus(menuObject, res);
});

module.exports = menuRouter;
