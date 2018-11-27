const allProducts = require("../schemas/allProductsSchema");

const viewProductsOperations = {
  getProductbyID(ID, req, res) {
    allProducts.findById(ID, (err, doc) => {
      if (err) {
        res.status(404).redirect("/");
      } else {
        allProducts
          .findByIdAndUpdate(ID, { $inc: { clicked: 1 } })
          .then(doc => {
            if (req.session && req.session.userID) {
              res.status(200).render("viewProduct.ejs", {
                product: doc,
                session: "true"
              });
            } else {
              res.status(200).render("viewProduct.ejs", {
                product: doc,
                session: "false"
              });
            }
          })
          .catch(err => {});
      }
    });
  }
};

module.exports = viewProductsOperations;
