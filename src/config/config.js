import dotenv from "dotenv";
dotenv.config();

import { Client } from 'pg';

const client = new Client(
  process.env.PG_URL
);

async function connection() {
  try {
    await client.connect();
    console.log(`${process.env.PGDATA} conectado!`);
  } catch (err) {
    console.log(`Não foi possível conectar ao ${process.env.PGDATA}:`, err);
  }
}

export { client, connection };
