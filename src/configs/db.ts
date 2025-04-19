import { Pool } from 'pg';

const poolObject = {
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: 'postgres',
    port: 5432
}

const pool = new Pool(poolObject);


pool.on("connect", () => {
    console.log("Connection pool established with database");
});


export { pool };