const mongoose = require("../../common/dbConnection");
const Schema = mongoose.Schema;

let WomenSchema = new Schema({
  name: String
});

let Women = mongoose.model("Women", WomenSchema);

module.exports = Women;
