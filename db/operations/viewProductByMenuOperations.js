const allProducts = require("../schemas/allProductsSchema");

const viewProductByMenuOperations = {
  getProductsByMenu(detailsObject, req, res) {
    let currentPage = Number(detailsObject.Query.page) || 1;
    const ITEMS_PER_PAGE = 2;
    const Skip_Items = (currentPage - 1) * ITEMS_PER_PAGE;
    allProducts
      .find(
        {
          menu: detailsObject.MainMenu,
          submenu: detailsObject.SubMenu
        },
        (err, docs) => {
          let totalPages = docs.length / ITEMS_PER_PAGE;
          if (
            detailsObject.Query.sort &&
            detailsObject.Query.sort == "Popularity"
          ) {
            docs.sort((first, second) => {
              return second.purchased - first.purchased;
            });
          }
          if (
            detailsObject.Query.sort &&
            detailsObject.Query.sort == "LowPrice"
          ) {
            docs.sort((first, second) => {
              return first.price - second.price;
            });
          }
          if (
            detailsObject.Query.sort &&
            detailsObject.Query.sort == "HighPrice"
          ) {
            docs.sort((first, second) => {
              return second.price - first.price;
            });
          }
          if (detailsObject.Query.sort && detailsObject.Query.sort == "New") {
            docs.reverse();
          }
          if (
            detailsObject.Query.sort &&
            detailsObject.Query.sort == "Discount"
          ) {
            docs.sort((first, second) => {
              return second.discount - first.discount;
            });
          }
          if (req.session && req.session.userID) {
            return res.status(200).render("viewProductsByMenu.ejs", {
              products: docs,
              session: "true",
              currentPage,
              totalPages: Math.round(totalPages),
              activeSort: detailsObject.Query.sort
            });
          } else {
            return res.status(200).render("viewProductsByMenu.ejs", {
              products: docs,
              session: "false",
              currentPage,
              totalPages: Math.round(totalPages),
              activeSort: detailsObject.Query.sort
            });
          }
        }
      )
      .skip(Skip_Items)
      .limit(ITEMS_PER_PAGE);
  }
};

module.exports = viewProductByMenuOperations;
