import mysql from 'mysql';
import { DbHandler } from '../repository/db.handler';

export default async () => {

  console.log(process.env.WILD_API_DB_HOST);

  const connexion = mysql.createConnection({
    host: process.env.WILD_API_DB_HOST,
    port: parseInt(process.env.WILD_API_DB_PORT || '3306', 10),
    user: process.env.WILD_API_DB_USER,
    password: process.env.WILD_API_FUMAINERIE_DB_PASSWORD,
    database: process.env.WILD_API_DB_DATABASE,
  });

  DbHandler.getInstance(connexion);

  return connexion;
};
// ne fonctionne pas
