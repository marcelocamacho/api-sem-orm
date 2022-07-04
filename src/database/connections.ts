import { Pool } from "pg";
const createConnection = async () => {
  const client = new Pool({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'code_drops'
  })
  await client.connect();
  return client;
}
export {createConnection};
