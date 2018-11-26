const mongoose = require("../../common/dbConnection");
const Schema = mongoose.Schema;

let TVsSchema = new Schema({
  name: String
});

let TVs = mongoose.model("TVs", TVsSchema);

module.exports = TVs;
