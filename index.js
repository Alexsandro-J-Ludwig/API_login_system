import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connection } from './src/config/config.js';
import criarTabela from "./src/query/singup.js";
import userRoutes from "./src/routes/userRoutes.js";

async function inicializar() {
    connection();
    criarTabela;
};

inicializar();  

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use("/user", userRoutes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));