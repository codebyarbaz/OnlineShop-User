const express = require("express");

const TestingRouter = express.Router();

const Users = require("../db/schemas/UserSchema");

TestingRouter.get("/", async (req, res, next) => {
  console.log("Finding start..");
  const user = await Users.find();
  console.log(user);
  //   Users.find()
  //     .then(docs => {
  //       console.log("In then block..");
  //       res.status(200).json(docs);
  //     })
  //     .catch(err => {});
  console.log("Finding end..");
});

module.exports = TestingRouter;
