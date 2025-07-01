import authService from "../service/authService.js";
import gerarToken from "../service/authService.js"

async function logar(req, res) {
    try {
        const { username, password } = req.body;

        if(!username || !password) return res.status(400).json({ msg: "Os campos devem estar preenchidos" });

        const user = await authService( username, password );

        if(!user) return res.status(400).json({ msg: "Não foi possível localizar usuario!" });

        const token = gerarToken(user.id)

        console.log(token)

        return res.send({token});

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    };
};

export default { logar };