const Electronics = require("../schemas/products/ElectronicsSchema");
const TVs = require("../schemas/products/TVsSchema");
const Men = require("../schemas/products/MenSchema");
const Women = require("../schemas/products/WomenSchema");
const Baby = require("../schemas/products/BabySchema");
const Furnitures = require("../schemas/products/FurnituresSchema");

const searchProductsOperations = {
  productsByQuery(details, req, res) {
    let currentPage = Number(details.page) || 1;
    const ITEMS_PER_PAGE = 2;
    const Skip_Items = (currentPage - 1) * ITEMS_PER_PAGE;
    const newdocs = [];
    Electronics.countDocuments((err, totalItems) => {
      const totalPages = totalItems / ITEMS_PER_PAGE;
      Electronics.find((err, docs) => {
        if (err) {
          return res.status(404).send("Error: In getting products from DB");
        } else {
          docs.forEach(doc => {
            if (
              doc.title.toLowerCase().includes(details.q.toLowerCase()) ||
              doc.menu.toLowerCase().includes(details.q.toLowerCase()) ||
              doc.submenu.toLowerCase().includes(details.q.toLowerCase())
            ) {
              newdocs.push(doc);
            }
          });
          Men.find((err, docs) => {
            if (err) {
              return res.status(404).send("Error: In getting products from DB");
            } else {
              docs.forEach(doc => {
                if (
                  doc.title.toLowerCase().includes(details.q.toLowerCase()) ||
                  doc.menu.toLowerCase().includes(details.q.toLowerCase()) ||
                  doc.submenu.toLowerCase().includes(details.q.toLowerCase())
                ) {
                  newdocs.push(doc);
                }
              });
              TVs.find((err, docs) => {
                if (err) {
                  return res
                    .status(404)
                    .send("Error: In getting products from DB");
                } else {
                  docs.forEach(doc => {
                    if (
                      doc.title
                        .toLowerCase()
                        .includes(details.q.toLowerCase()) ||
                      doc.menu
                        .toLowerCase()
                        .includes(details.q.toLowerCase()) ||
                      doc.submenu
                        .toLowerCase()
                        .includes(details.q.toLowerCase())
                    ) {
                      newdocs.push(doc);
                    }
                  });
                  Women.find((err, docs) => {
                    if (err) {
                      return res
                        .status(404)
                        .send("Error: In getting products from DB");
                    } else {
                      docs.forEach(doc => {
                        if (
                          doc.title
                            .toLowerCase()
                            .includes(details.q.toLowerCase()) ||
                          doc.menu
                            .toLowerCase()
                            .includes(details.q.toLowerCase()) ||
                          doc.submenu
                            .toLowerCase()
                            .includes(details.q.toLowerCase())
                        ) {
                          newdocs.push(doc);
                        }
                      });
                      Baby.find((err, docs) => {
                        if (err) {
                          return res
                            .status(404)
                            .send("Error: In getting products from DB");
                        } else {
                          docs.forEach(doc => {
                            if (
                              doc.title
                                .toLowerCase()
                                .includes(details.q.toLowerCase()) ||
                              doc.menu
                                .toLowerCase()
                                .includes(details.q.toLowerCase()) ||
                              doc.submenu
                                .toLowerCase()
                                .includes(details.q.toLowerCase())
                            ) {
                              newdocs.push(doc);
                            }
                          });
                          Furnitures.find((err, docs) => {
                            if (err) {
                              return res
                                .status(404)
                                .send("Error: In getting products from DB");
                            } else {
                              docs.forEach(doc => {
                                if (
                                  doc.title
                                    .toLowerCase()
                                    .includes(details.q.toLowerCase()) ||
                                  doc.menu
                                    .toLowerCase()
                                    .includes(details.q.toLowerCase()) ||
                                  doc.submenu
                                    .toLowerCase()
                                    .includes(details.q.toLowerCase())
                                ) {
                                  newdocs.push(doc);
                                }
                              });
                              if (
                                details.sort &&
                                details.sort == "Popularity"
                              ) {
                                newdocs.sort((first, second) => {
                                  return second.purchased - first.purchased;
                                });
                              }
                              if (details.sort && details.sort == "LowPrice") {
                                newdocs.sort((first, second) => {
                                  return first.price - second.price;
                                });
                              }
                              if (details.sort && details.sort == "HighPrice") {
                                newdocs.sort((first, second) => {
                                  return second.price - first.price;
                                });
                              }
                              if (details.sort && details.sort == "New") {
                                newdocs.reverse();
                              }
                              if (details.sort && details.sort == "Discount") {
                                newdocs.sort((first, second) => {
                                  return second.discount - first.discount;
                                });
                              }

                              // Checking Trusted Product
                              let TrustedProduct = false;
                              if (details.trust && details.trust == "on") {
                                TrustedProduct = true;
                              }
                              if (details.trust && details.trust == "off") {
                                TrustedProduct = false;
                              }

                              // Checking Price Filter Min & Max Both
                              if (details.minPrice && details.maxPrice) {
                                let newdocs2 = [];
                                newdocs.forEach(doc => {
                                  if (
                                    doc.price >= details.minPrice &&
                                    doc.price <= details.maxPrice
                                  ) {
                                    newdocs2.push(doc);
                                  }
                                });
                                if (req.session && req.session.userID) {
                                  return res
                                    .status(200)
                                    .render("searchProducts.ejs", {
                                      products: newdocs2,
                                      q: details.q,
                                      session: "true",
                                      currentPage,
                                      totalPages,
                                      minPrice: details.minPrice,
                                      maxPrice: details.maxPrice,
                                      TrustedProduct
                                    });
                                } else {
                                  return res
                                    .status(200)
                                    .render("searchProducts.ejs", {
                                      products: newdocs2,
                                      q: details.q,
                                      session: "false",
                                      currentPage,
                                      totalPages,
                                      minPrice: details.minPrice,
                                      maxPrice: details.maxPrice,
                                      TrustedProduct
                                    });
                                }
                              }
                              if (details.minPrice) {
                                let newdocs2 = [];
                                newdocs.forEach(doc => {
                                  if (doc.price >= details.minPrice) {
                                    newdocs2.push(doc);
                                  }
                                });
                                if (req.session && req.session.userID) {
                                  return res
                                    .status(200)
                                    .render("searchProducts.ejs", {
                                      products: newdocs2,
                                      q: details.q,
                                      session: "true",
                                      currentPage,
                                      totalPages,
                                      minPrice: details.minPrice,
                                      maxPrice: details.maxPrice,
                                      TrustedProduct
                                    });
                                } else {
                                  return res
                                    .status(200)
                                    .render("searchProducts.ejs", {
                                      products: newdocs2,
                                      q: details.q,
                                      session: "false",
                                      currentPage,
                                      totalPages,
                                      minPrice: details.minPrice,
                                      maxPrice: details.maxPrice,
                                      TrustedProduct
                                    });
                                }
                              }
                              if (details.maxPrice) {
                                let newdocs2 = [];
                                newdocs.forEach(doc => {
                                  if (doc.price <= details.maxPrice) {
                                    newdocs2.push(doc);
                                  }
                                });
                                if (req.session && req.session.userID) {
                                  return res
                                    .status(200)
                                    .render("searchProducts.ejs", {
                                      products: newdocs2,
                                      q: details.q,
                                      session: "true",
                                      currentPage,
                                      totalPages,
                                      minPrice: details.minPrice,
                                      maxPrice: details.maxPrice,
                                      TrustedProduct
                                    });
                                } else {
                                  return res
                                    .status(200)
                                    .render("searchProducts.ejs", {
                                      products: newdocs2,
                                      q: details.q,
                                      session: "false",
                                      currentPage,
                                      totalPages,
                                      minPrice: details.minPrice,
                                      maxPrice: details.maxPrice,
                                      TrustedProduct
                                    });
                                }
                              }
                              if (req.session && req.session.userID) {
                                return res
                                  .status(200)
                                  .render("searchProducts.ejs", {
                                    products: newdocs,
                                    q: details.q,
                                    session: "true",
                                    currentPage,
                                    totalPages,
                                    totalItems: newdocs.length,
                                    minPrice: "",
                                    maxPrice: "",
                                    TrustedProduct
                                  });
                              } else {
                                return res
                                  .status(200)
                                  .render("searchProducts.ejs", {
                                    products: newdocs,
                                    q: details.q,
                                    session: "false",
                                    currentPage,
                                    totalPages,
                                    totalItems: newdocs.length,
                                    minPrice: "",
                                    maxPrice: "",
                                    TrustedProduct
                                  });
                              }
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      })
        .skip(Skip_Items)
        .limit(ITEMS_PER_PAGE);
    });
  }
};

module.exports = searchProductsOperations;
