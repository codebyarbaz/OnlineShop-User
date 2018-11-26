const mongoose = require("../../common/dbConnection");
const Schema = mongoose.Schema;

const ProductRatingSchema = new Schema({
  rate: Number
});

const ProductImagesSchema = new Schema({
  name: String,
  url: String
});

const AvialableDeliverySchema = new Schema({
  pincode: Number
});

const ProductReviewsSchema = new Schema({
  title: String,
  rate: Number,
  note: String
});

const MenProductsSchema = new Schema({
  title: String,
  price: Number,
  discount: Number,
  images: [ProductImagesSchema],
  rating: [ProductRatingSchema],
  availability: [AvialableDeliverySchema],
  description: String,
  specification: String,
  reviews: [ProductReviewsSchema],
  menu: String,
  submenu: String,
  trusted: Boolean,
  active: Boolean,
  clicked: Number,
  purchased: Number
});

const MenProducts = mongoose.model("MenProducts", MenProductsSchema);

module.exports = MenProducts;
