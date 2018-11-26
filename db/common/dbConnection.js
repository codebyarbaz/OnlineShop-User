const mongoose = require("mongoose");
const dbConfig = require("./dbConfig");

mongoose.connect(
  dbConfig.dbURL,
  { useNewUrlParser: true },
  () => {
    console.log("DB Connected");
  }
);

module.exports = mongoose;
