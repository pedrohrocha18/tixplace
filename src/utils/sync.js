import sequelize from "../database/db.js";
import User from "../models/User.js";

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Tabelas criadas!");
  })
  .catch((error) => {
    console.log(error);
  });
