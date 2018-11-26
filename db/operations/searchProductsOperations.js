const allProducts = require("../schemas/allProductsSchema");

const searchProductsOperations = {
  productsByQuery(details, req, res) {
    allProducts.find().cursor();
    let currentPage = Number(details.page) || 1;
    const ITEMS_PER_PAGE = 4;
    const Skip_Items = (currentPage - 1) * ITEMS_PER_PAGE;
    const newdocs = [];
    allProducts
      .find((err, docs) => {
        if (err) {
          return res.status(404).send("Error: In getting products from DB");
        } else {
          const totalPages = docs.length / ITEMS_PER_PAGE;
          docs.forEach(doc => {
            if (
              doc.title.toLowerCase().includes(details.q.toLowerCase()) ||
              doc.menu.toLowerCase().includes(details.q.toLowerCase()) ||
              doc.submenu.toLowerCase().includes(details.q.toLowerCase())
            ) {
              newdocs.push(doc);
            }
          });
          if (details.sort && details.sort == "Popularity") {
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
              return res.status(200).render("searchProducts.ejs", {
                products: newdocs2,
                q: details.q,
                session: "true",
                currentPage,
                totalPages: Math.round(totalPages),
                minPrice: details.minPrice,
                maxPrice: details.maxPrice,
                TrustedProduct,
                activeSort: details.sort
              });
            } else {
              return res.status(200).render("searchProducts.ejs", {
                products: newdocs2,
                q: details.q,
                session: "false",
                currentPage,
                totalPages: Math.round(totalPages),
                minPrice: details.minPrice,
                maxPrice: details.maxPrice,
                TrustedProduct,
                activeSort: details.sort
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
              return res.status(200).render("searchProducts.ejs", {
                products: newdocs2,
                q: details.q,
                session: "true",
                currentPage,
                totalPages: Math.round(totalPages),
                minPrice: details.minPrice,
                maxPrice: details.maxPrice,
                TrustedProduct,
                activeSort: details.sort
              });
            } else {
              return res.status(200).render("searchProducts.ejs", {
                products: newdocs2,
                q: details.q,
                session: "false",
                currentPage,
                totalPages: Math.round(totalPages),
                minPrice: details.minPrice,
                maxPrice: details.maxPrice,
                TrustedProduct,
                activeSort: details.sort
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
              return res.status(200).render("searchProducts.ejs", {
                products: newdocs2,
                q: details.q,
                session: "true",
                currentPage,
                totalPages: Math.round(totalPages),
                minPrice: details.minPrice,
                maxPrice: details.maxPrice,
                TrustedProduct,
                activeSort: details.sort
              });
            } else {
              return res.status(200).render("searchProducts.ejs", {
                products: newdocs2,
                q: details.q,
                session: "false",
                currentPage,
                totalPages: Math.round(totalPages),
                minPrice: details.minPrice,
                maxPrice: details.maxPrice,
                TrustedProduct,
                activeSort: details.sort
              });
            }
          }
          if (req.session && req.session.userID) {
            return res.status(200).render("searchProducts.ejs", {
              products: newdocs,
              q: details.q,
              session: "true",
              currentPage,
              totalPages: Math.round(totalPages),
              totalItems: newdocs.length,
              minPrice: "",
              maxPrice: "",
              TrustedProduct,
              activeSort: details.sort
            });
          } else {
            return res.status(200).render("searchProducts.ejs", {
              products: newdocs,
              q: details.q,
              session: "false",
              currentPage,
              totalPages: Math.round(totalPages),
              totalItems: newdocs.length,
              minPrice: "",
              maxPrice: "",
              TrustedProduct,
              activeSort: details.sort
            });
          }
        }
      })
      .skip(Skip_Items)
      .limit(ITEMS_PER_PAGE);
  }
};

module.exports = searchProductsOperations;
