import login from "../query/login.js";

const authService = (username, password) => login(username, password);

export default authService;