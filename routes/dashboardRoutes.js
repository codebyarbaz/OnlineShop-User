const express = require("express");
const dashboardRouter = express.Router();
const sessionCheck = require("../middlewares/sessionCheck");

dashboardRouter.get("/", sessionCheck, (req, res) => {
  res.status(200).redirect("/account/login");
  // if (req.session && req.session.userID) {
  //   res.status(200).render("dashboard.ejs");
  // } else {
  //   res.status(200).redirect("/account/login");
  // }
});

module.exports = dashboardRouter;
