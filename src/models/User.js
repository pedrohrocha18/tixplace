import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import bcrypt from "bcrypt";

const User = sequelize.define(
  "User",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);

User.beforeCreate(async (user) => {
  try {
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);
  } catch (error) {
    console.log(error);
  }
});

export default User;
