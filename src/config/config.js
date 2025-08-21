import dotenv from "dotenv";
dotenv.config();

import { Client } from 'pg';

const client = new Client({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  password: process.env.PGPASS,
  database: process.env.PGDATA,
});

async function connection() {
  try {
    await client.connect();
    console.log(`${process.env.PGDATA} conectado!`);
  } catch (err) {
    console.log(`Não foi possível conectar ao ${process.env.PGDATA}:`, err);
  }
}

export { client, connection };
