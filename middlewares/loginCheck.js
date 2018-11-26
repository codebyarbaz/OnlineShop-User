const loginCheck = (req, res, next) => {
  if (req.session && req.session.userID) {
    res.status(200).redirect("/dashboard");
  } else {
    next();
  }
};

module.exports = loginCheck;
