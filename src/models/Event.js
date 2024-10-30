import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const Event = sequelize.define(
  "Event",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalTickets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "events",
  }
);

export default Event;
