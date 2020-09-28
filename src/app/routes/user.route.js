module.exports = (app) => {
    const { addUser, getUsers } = require("../controllers/user.controller");
  
    app.post("/users", addUser);
    app.get("/users", getUsers);
  };
  