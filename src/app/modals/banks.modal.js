const mongoose = require("mongoose");

const banksSchema = mongoose.Schema({
  bankName: { type: String },
  productName: { type: String },
  sector: { type: String },
  purpose: [String],

  markUp: {
    postFix: { type: String },
    preFix: { type: String },
    minMarkUp: { type: String },
    maxMarkUp: { type: String },
  },
  loanAmount: {
    minAmount: { type: Number },
    maxAmount: { type: Number },
  },

  tenure: {
    minTenure: { type: Number },
    maxTenure: { type: Number },
  },
  collateral: [String],
  contactDetails: {
    name: { type: String },
    designation: { type: String },
    department: { type: String },
    address: { type: String },
    city: { type: String },
    phone: { type: String },
  },
});

const Banks = mongoose.model("banks", banksSchema);

module.exports = {
  Banks,
};
