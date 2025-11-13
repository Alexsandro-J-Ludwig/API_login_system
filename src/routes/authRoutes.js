import { Router } from "express";
import authController from "../controller/authController.js";

const authRoute = Router();

authRoute.post('/login', authController.logar);

export default authRoute;
