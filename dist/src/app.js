"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { pool } = require("./configs/db.js");
dotenv.config();
const app = express();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
// Middlewares
app.use(express.json());
app.use(cors());
// Routes
// Error handlers
// Testing 
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const newPool = pool;
    const result = yield newPool.query("SELECT current_database()");
    return res.send(result);
}));
// Server running
app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
});
