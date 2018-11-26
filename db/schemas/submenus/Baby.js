const mongoose = require("../../common/dbConnection");
const Schema = mongoose.Schema;

let BabySchema = new Schema({
  name: String
});

let Baby = mongoose.model("Baby", BabySchema);

module.exports = Baby;
