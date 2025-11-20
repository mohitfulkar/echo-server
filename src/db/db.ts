import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { config } from 'dotenv';
config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
console.log('DATABASE_URL:', process.env.DATABASE_URL);
client.connect();

export const db = drizzle(client, { schema });
