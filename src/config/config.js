import dotenv from "dotenv";
dotenv.config();

import { Client } from 'pg';

const client = new Client({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DAaTA,
});

async function connection() {
  try {
    await client.connect();
    console.log(`${process.env.PG_DATA} conectado!`);
  } catch (err) {
    console.log(`Não foi possível conectar ao ${process.env.PG_DATA}:`, err);
  }
}

export { client, connection };