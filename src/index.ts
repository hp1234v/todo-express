import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { pool } from './configs/db';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes



// Error handlers


// Testing 
app.get("/", async(req: any, res: any) => {
    const result = await pool.query("SELECT current_database()");
    return res.send(result);
});

// Server running
app.listen(3000, () =>{
    console.log(`Listening on port ${port}`);
});