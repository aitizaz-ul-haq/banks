const mongoose = require("mongoose");

const banksSchema = mongoose.Schema({
  bankName: { type: String },
  productName: { type: String },
  sector: { type: String },
  purpose: [{ type: String }],

  markUp: {
    type: String,
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
    mintenure: { type: Number },
    maxtenure: { type: Number },
  },
  collateral: [{ type: String }],
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
