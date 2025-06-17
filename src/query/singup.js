import { client } from '../config/config.js'; 
import bcrypt from "bcrypt";

async function criarTabela() {
    const query = `
    CREATE TABLE IF NOT EXISTS USERS(
      id serial primary key,
      username varchar(50) unique not null,
      password varchar(60) not null
    )
  `
  await client.query(query);
}

async function singup(username, password) {
  const hashPass = await bcrypt.hash(password, 10);

  const query = `
    INSERT INTO USERS(USERNAME, PASSWORD)
    VALUES($1, $2)
    RETURNING *
  `;

  const res = await client.query(query, [username, hashPass]);
  return res.rows[0];
}

export default {criarTabela, singup};
