const Users = require("../schemas/UserSchema");

const sessionCheckOperations = {
  getUserbyID(userID, req, res) {
    Users.findById(userID, (err, doc) => {
      if (err) {
        res.status(500).send("Unlable to login now");
      } else {
        if (req.session.cart) {
          return res.status(200).render("dashboard.ejs", {
            user: doc,
            cartItems: req.session.cart.length
          });
        } else {
          return res
            .status(200)
            .render("dashboard.ejs", { user: doc, cartItems: 0 });
        }
      }
    });
  }
};

module.exports = sessionCheckOperations;
