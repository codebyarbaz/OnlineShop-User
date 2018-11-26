const mongoose = require("../common/dbConnection");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  productID: String,
  title: String,
  price: Number,
  image: String,
  address: String,
  orderDate: String,
  quantity: Number,
  status: String
});

const UserSchema = new Schema({
  name: String,
  mobile: Number,
  email: String,
  password: String,
  address: String,
  orders: [OrderSchema],
  purchasedOrders: [OrderSchema]
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
