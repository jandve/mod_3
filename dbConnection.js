import pg from 'pg';

const { Pool } = pg;
export const dbConnection = new Pool({
  user: 'jan',
  password: 'password',
  host: 'localhost',
  database: 'mod_3',
  port: '5466',
});
