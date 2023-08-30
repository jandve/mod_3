import pg from 'pg';

const { Pool } = pg;
export const dbConnection = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'module_3_db',
  port: '5466',
});
