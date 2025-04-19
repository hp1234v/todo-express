import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { pool } from './configs/db';
import userRoutes from './routes/userRoutes';
import errorHandler from './middlewares/errorHandler';
import createToDoSchema from './data/createToDoSchema/createToDoSchema';
import createUsersTable from './data/createUserTable/createUserTable';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Data Setup
createToDoSchema();
createUsersTable();

// Routes
app.use("/api", userRoutes);

// Error handlers
app.use(errorHandler);


// Testing 
app.get("/", async(req: any, res: any) => {
    const result = await pool.query("SELECT current_database()");
    return res.send(`The database name is : ${result.rows[0].current_database}`);
});

// Server running
app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});