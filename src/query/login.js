import { client } from "../config/config.js";
import bcrypt from "bcrypt";

async function login(username, password) {
    const query = `
      SELECT * FROM USERS WHERE USERNAME = $1
    `;
  
    const result = await client.query(query, [username]);
  
    if (result.rows.length === 0) {
      console.log("Usuário não encontrado!");
      return null;
    }
  
    const user = result.rows[0];
  
    const comparacao = await bcrypt.compare(password, user.password);
  
    if (!comparacao) {
      console.log("Senha incorreta!");
      return null;
    }
  
    return user.id, user.username, user.password;
  }

export default login;