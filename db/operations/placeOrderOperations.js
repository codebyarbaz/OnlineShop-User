const Users = require("../schemas/UserSchema");
const allProducts = require("../schemas/allProductsSchema");

const placeOrderOperations = {
  placeOrderNow(userID, cartProducts, orderDate, req, res) {
    Users.findById(userID, (err, doc) => {
      if (err) {
        return res.status(404).send("Unable to book this order.");
      } else {
        if (doc.address == "") {
          return res.status(200).send("Please fill the address details.");
        }
        cartProducts.forEach(cartProduct => {
          this.IncreasePurchasedQuantity(
            cartProduct.productID,
            cartProduct.quantity
          );
          cartProduct.address = doc.address;
          cartProduct.status = "Pending";
          cartProduct.orderDate = orderDate;
          doc.orders.push(cartProduct);
        });
        doc.save(() => {
          req.session.cart = [];
          return res.status(200).send("Order Successfull");
        });
      }
    });
  },
  IncreasePurchasedQuantity(productID, Quantity) {
    allProducts
      .findByIdAndUpdate(productID, { $inc: { purchased: Quantity } })
      .then(doc => {})
      .catch(err => {
        console.log("Error: In increasing purchasing number times");
      });
  }
};

module.exports = placeOrderOperations;
