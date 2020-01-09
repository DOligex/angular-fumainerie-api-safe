import expressLoader from './express';
import mysqlLoader from './mysql';
import { Application } from 'express';

export default async (app: Application ) => {
  await expressLoader(app);
  // tslint:disable-next-line: no-console
  console.log('Express Intialized');

  // Rajouter le loader MySQL
  await mysqlLoader();
  // tslint:disable-next-line: no-console
  console.log('MySQL Intialized');

};
