"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const poolObject = {
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: 'postgres',
    port: 5432
};
const pool = new pg_1.Pool(poolObject);
exports.pool = pool;
pool.on("connect", () => {
    console.log("Connection pool established with database");
});
