const allProducts = require("../schemas/allProductsSchema");

const allReviewsOperations = {
  getAllReviews(ID, req, res) {
    allProducts.findById(ID, (err, doc) => {
      if (req.session && req.session.userID) {
        res.status(200).render("allReviews.ejs", {
          product: doc,
          ID: doc._id,
          title: doc.title,
          price: doc.price,
          image: doc.images[0],
          rating: doc.rating,
          reviews: doc.reviews,
          session: "true"
        });
      } else {
        res.status(200).render("allReviews.ejs", {
          product: doc,
          ID: doc._id,
          title: doc.title,
          price: doc.price,
          image: doc.images[0],
          rating: doc.rating,
          reviews: doc.reviews,
          session: "false"
        });
      }
    });
  }
};

module.exports = allReviewsOperations;
