import mysql from 'mysql';
import { DbHandler } from '../repository/db.handler';

export default async () => {

  const pool = mysql.createPool({
    connectionLimit : 10,
    host: process.env.WILD_API_DB_HOST,
    port: Number(process.env.WILD_API_DB_PORT),
    user: process.env.WILD_API_DB_USER,
    password: process.env.WILD_API_FUMAINERIE_DB_PASSWORD,
    database: process.env.WILD_API_DB_DATABASE,
    dateStrings: true,
  });

  DbHandler.getInstance(pool);

  return pool;
};
