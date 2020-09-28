const { Banks } = require("../modals/banks.modal");

//Add bank data to DB
const addbanks = async (req, res) => {
  try {
    req.body.forEach(async (e, i) => {
      await Banks.create(e);
      console.log("bank created: ", i);
    });

    return res.status(200).json({
      status: true,
      data: "records added successfully!",
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

const getBanks = async (req, res, next) => {
  try {
    const banks = await Banks.find();
    return res.send({
      status: true,
      data: banks,
    });
  } catch (error) {
    console.log(error);
  }
};

const getBnaksbyid = async (req, res, next) => {
    try {

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
  addbanks,
  getBanks,
};
