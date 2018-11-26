const mongoose = require("../../common/dbConnection");
const Schema = mongoose.Schema;

let FurnituresSchema = new Schema({
  name: String
});

let Furnitures = mongoose.model("Furnitures", FurnituresSchema);

module.exports = Furnitures;
