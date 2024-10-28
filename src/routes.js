import { Router } from "express";
import userController from "./controllers/userController.js";
import authController from "./controllers/authController.js";

const routes = Router();

// users
routes.post("/users", userController.createUser);

// login
routes.get("/login", authController.authUser);

export default routes;
