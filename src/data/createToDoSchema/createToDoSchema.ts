import { pool } from "../../configs/db";

const createToDoSchema = async () => {
    const query = `CREATE SCHEMA IF NOT EXISTS todo`;
    try {
        setTimeout(async () => {
            await pool.query(query, []);
            console.log(`Schema created successfully`);
        }, 1000)
        
    } catch (err) {
        console.log(`Schema creation failed` );
    }
}


export default createToDoSchema;