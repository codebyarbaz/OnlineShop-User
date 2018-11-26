const express = require("express");
const accountRouter = express.Router();

const { check } = require("express-validator/check");
const accountOperations = require("../db/operations/accountOperations");
const loginCheck = require("../middlewares/loginCheck");

accountRouter.get("/", (req, res) => {
  res.status(200).redirect("/account/signup");
});

accountRouter.get("/login", loginCheck, (req, res) => {
  if (req.flash("loginErrMsg").length) {
    return res
      .status(200)
      .render("login", { loginErrMsg: req.flash("loginErrMsg")[0] });
  } else {
    return res
      .status(200)
      .render("login", { loginErrMsg: [], oldEmail: "", oldPassword: "" });
  }
});

accountRouter.get("/signup", loginCheck, (req, res) => {
  res.status(200).render("signup.ejs");
});

accountRouter.post("/signup", (req, res) => {
  let name = req.body.name;
  let mobile = req.body.mobile;
  let email = req.body.email;
  let password = req.body.password;
  let userDetails = { name, mobile, email, password };
  accountOperations.addUser(userDetails, res);
});

accountRouter.post(
  "/login",
  [
    check("email", "Please enter valid email address.").isEmail(),
    check("password", "Password must be atleast 5 characters long.").isLength({
      min: 5
    })
  ],
  (req, res) => {
    let userDetails = { email: req.body.email, password: req.body.password };
    accountOperations.fetchUser(userDetails, req, res);
  }
);

accountRouter.get("/profile", (req, res) => {
  if (req.session && req.session.userID) {
    accountOperations.myAccountDetails(req.session.userID, res);
  } else {
    res.status(200).redirect("/account/login");
  }
});

accountRouter.post("/myaccount/addNewAddress", (req, res) => {
  accountOperations.addNewAddress(req.body, res);
});

accountRouter.post("/myaccount/updateMobile", (req, res) => {
  accountOperations.updateMobile(req.body, res);
});

accountRouter.post("/myaccount/updatePassword", (req, res) => {
  accountOperations.updatePassword(req.body, res);
});

accountRouter.get("/signout", (req, res) => {
  if (req.session && req.session.userID) {
    req.session.userID = "";
    res.status(200).redirect("/account/login");
  } else {
    res.status(200).redirect("/account/login");
  }
});

accountRouter.get("/myorders", (req, res) => {
  if (req.session && req.session.userID) {
    accountOperations.getMyOrders(req.session.userID, res);
  } else {
    res.status(200).redirect("/account/login");
  }
});

module.exports = accountRouter;
