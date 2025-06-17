import { Router } from "express";
import userController from "../controller/userController.js";
import authController from "../controller/authController.js";

const route = Router();

console.log('hello')
route.post('/signup', userController.cadastrar);
route.post('/login', authController.logar);

export default route;
