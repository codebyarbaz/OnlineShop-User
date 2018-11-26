const mongoose = require("../../common/dbConnection");
const Schema = mongoose.Schema;

let MenSchema = new Schema({
  name: String
});

let Men = mongoose.model("Men", MenSchema);

module.exports = Men;
