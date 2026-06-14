const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: String,
  role: String,
  package: String,
  location: String
});

module.exports = mongoose.model("Company", companySchema);