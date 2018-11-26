const Carousel = require("../schemas/carouselSchema");

const CarouselOperations = {
  getCarousel(res) {
    Carousel.find((err, docs) => {
      if (err) {
        res.send("Error: In getting carousel images from DB");
      } else {
        return res.json(docs);
      }
    });
  }
};

module.exports = CarouselOperations;
