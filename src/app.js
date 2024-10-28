import express from "express";
import sequelize from "./database/db.js";
import routes from "./routes.js";

const app = express();

app.use(express.json());

app.use(routes);

try {
  sequelize.authenticate();
} catch (error) {
  console.log(error);
}

export default app;
