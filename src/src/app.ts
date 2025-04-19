const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { pool } = require("./configs/db.js")

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
    console.log(req);
    const newPool: any = pool;
    const result = await newPool.query("SELECT current_database()");
    return res.send(result);
});

// Server running
app.listen(3000, () =>{
    console.log(`Listening on port ${port}`);
});