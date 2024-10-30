import { Router } from "express";
import userController from "./controllers/userController.js";
import authController from "./controllers/authController.js";
import eventController from "./controllers/eventController.js";

const routes = Router();

// users
routes.post("/users", userController.createUser);
routes.get("/users", userController.allUsers);

// login
routes.get("/login", authController.authUser);

// event
routes.get("/events", eventController.allEvents);
routes.post("/events", eventController.createEvent);

export default routes;
