import { Router } from "express";
import { UserController } from "../../app/use-cases/user/UserController";

const routes = Router();

const userController = new UserController();
routes.post("/user", userController.create);
routes.post("/user/auth", userController.auth);

export { routes };