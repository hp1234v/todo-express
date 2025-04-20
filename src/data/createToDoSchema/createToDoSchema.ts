import { pool } from "../../configs/db";

const createToDoSchema = async () => {
    const query = `CREATE SCHEMA IF NOT EXISTS todo`;
    try {
        await pool.query(query, []);
        console.log(`Todo schema created successfully`);
    } catch (err) {
        console.log(`Todo schema creation failed`);
    }
}


export default createToDoSchema;