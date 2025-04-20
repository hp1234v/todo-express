import { pool } from "../../configs/db";

const createToDoSchema = async () => {
    const query = `CREATE SCHEMA IF NOT EXISTS todo`;
    try {
        await pool.query(query, []);
        console.log(`Schema created successfully`);
    } catch (err) {
        console.log(`Schema creation failed`);
    }
}


export default createToDoSchema;