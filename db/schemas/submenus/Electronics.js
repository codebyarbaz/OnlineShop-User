const mongoose = require("../../common/dbConnection");
const Schema = mongoose.Schema;

let ElectronicsSchema = new Schema({
  name: String
});

const Electronics = mongoose.model("Electronics", ElectronicsSchema);

module.exports = Electronics;
