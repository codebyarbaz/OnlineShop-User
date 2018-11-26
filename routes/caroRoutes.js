const express = require("express");
const carouselRouter = express.Router();
const carouselOperations = require("../db/operations/carouselOperations");

carouselRouter.get("/getCarouselImages", (req, res) => {
  carouselOperations.getCarousel(res);
});

module.exports = carouselRouter;
