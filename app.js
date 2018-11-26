const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

const menuRoutes = require("./routes/menusRoutes");
const carouselRoutes = require("./routes/caroRoutes");
const ProductRoutes = require("./routes/productRoutes");
const checkAvailabilityRoutes = require("./routes/checkAvailabilityRoutes");
const viewProductElectronicsRoutes = require("./routes/viewProductRoutes");
const viewCartRoutes = require("./routes/viewCartRoutes");
const allReviewsRoutes = require("./routes/allReviewsRoutes");
const addToCartRoutes = require("./routes/addToCartRoutes");
const viewProductsByMenuRoutes = require("./routes/viewProductsByMenuRoutes");
const searchProductsRoutes = require("./routes/searchProductsRoutes");
const accountRoutes = require("./routes/accountRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const placeOrderRoutes = require("./routes/placeOrderRoutes");
const TestingRoutes = require("./routes/TestingRoutes");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(
  session({
    secret: "It's a secret key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 }
  })
);
app.use(flash());

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/menu", menuRoutes);
app.use("/caro", carouselRoutes);
app.use("/pro", ProductRoutes);
app.use("/checkAvailability", checkAvailabilityRoutes);
app.use("/viewProduct", viewProductElectronicsRoutes);
app.use("/viewCart", viewCartRoutes);
app.use("/AllReviews", allReviewsRoutes);
app.use("/addToCart", addToCartRoutes);
app.use("/show", viewProductsByMenuRoutes);
app.use("/search", searchProductsRoutes);
app.use("/account", accountRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/placeOrder", placeOrderRoutes);
app.use("/test", TestingRoutes);

app.use((req, res, next) => {
  res.status(200).render("404");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("The server is running on PORT 4000");
});
