const allProducts = require("../schemas/allProductsSchema");

const checkAvailibilityOperations = {
  checkAvailibility(ID, res) {
    allProducts.findById(ID, (err, doc) => {
      if (err) {
        res.send("Error: In fetching pincodes from DB");
      } else {
        res.send(doc);
      }
    });
  }
};

module.exports = checkAvailibilityOperations;
