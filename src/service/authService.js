import login from "../query/login.js";
import jwt from "jsonwebtoken";

const authService = (username, password) => login(username, password);

const gerarToken = (id) => jwt.sign({id:id}, process.env.SKJWT, {expiresIn: 86400});

export default (authService, gerarToken);