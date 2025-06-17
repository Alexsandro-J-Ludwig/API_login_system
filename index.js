import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connection } from './src/config/config.js';
import singup from "./src/query/singup.js";
import authRoute from "./src/routes/userRoutes.js";
import userRoutes from "./src/routes/authRoutes.js"

async function inicializar() {
    await connection();
    await singup.criarTabela();
};

inicializar();  

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use("/", authRoute);
app.use("/", userRoutes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));