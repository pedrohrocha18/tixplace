import sequelize from "../database/db.js";
import User from "../models/User.js";
import Event from "../models/Event.js";
import Ticket from "../models/Ticket.js";

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Tabelas criadas!");
  })
  .catch((error) => {
    console.log(error);
  });
