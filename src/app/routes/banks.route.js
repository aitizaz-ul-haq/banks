module.exports = (app) => {
  const { addbanks, getBanks } = require("../controllers/banks.controller");

  app.post("/banks", addbanks);
  app.get("/banks", getBanks);
};
