const mongoose = require("../common/dbConnection");
const Schema = mongoose.Schema;

const CarouselSchema = new Schema({
  name: String,
  imageUrl: String,
  file: String
});

const Carousel = mongoose.model("Carousel", CarouselSchema);

module.exports = Carousel;
