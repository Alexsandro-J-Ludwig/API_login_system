import singup from "../query/singup.js";

const singupService = async (username, password) => {
    return await singup(username, password)
}

export default singupService;