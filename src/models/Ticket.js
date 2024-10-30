import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import Event from "./Event.js";

const Ticket = sequelize.define(
  "Ticket",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nameEvent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tickets",
  }
);

Event.hasOne(Ticket, {
  foreignKey: "id",
});
Ticket.belongsTo(Event, {
  foreignKey: "id",
});

export default Ticket;
