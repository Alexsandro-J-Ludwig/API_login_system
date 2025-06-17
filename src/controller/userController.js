import singupService from "../service/singupService.js";

async function cadastrar(req, res) {
    try {
        const {username, password} = req.body;

        if(!username || !password) return res.status(400).json({ msg: "Os campos devem estar preenchidos" });

        const user = await singupService(username, password);

        if(!user) return res.status(400).json({ msg: "Não foi possível realizar o cadastro!" });

        return res.status(201).json({ msg: "Usuario cadastrado com sucesso!" });

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    };
};

export default { cadastrar };