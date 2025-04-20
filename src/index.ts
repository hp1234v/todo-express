import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import errorHandler from './middlewares/errorHandler';
import createDB from './data';
import todoRoutes from './routes/todoRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Data Setup
createDB();

// Routes
app.use("/api", userRoutes);
app.use("/api", todoRoutes);

// Error handlers
app.use(errorHandler);

// Server running
app.listen(port, () => console.log(`Listening on port ${port}`));