import { Router } from "express";
import userController from "../controller/userController.js";

const signupRoute = Router();

signupRoute.post('/signup', userController.cadastrar);

export default signupRoute;
