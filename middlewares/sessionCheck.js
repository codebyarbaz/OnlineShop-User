const sessionCheckOperations = require("../db/operations/sessionCheckOperations");

const sessionCheck = (req, res, next) => {
  if (req.session && req.session.userID) {
    sessionCheckOperations.getUserbyID(req.session.userID, req, res);
  } else {
    next();
  }
};

module.exports = sessionCheck;
