import singup from "../query/singup.js";

const singupService = async(username, password) => {
    try {
        singup.singup(username, password);

    } catch (error) {
        throw error;
    }
}

export default singupService;