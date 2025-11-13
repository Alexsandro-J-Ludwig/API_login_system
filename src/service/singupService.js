import singup from "../query/singup.js";

const singupService = async(username, password) => {
    try {
        const user = await singup.singup(username, password);
        return user;

    } catch (error) {
        throw error;
    }
}

export default singupService;