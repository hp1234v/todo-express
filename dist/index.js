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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./configs/db");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
// Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Create table if not exists before starting the API
// createUserTable();
// Routes
app.use("/api", userRoutes_1.default);
// Error handlers
app.use(errorHandler_1.default);
// Testing 
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.pool.query("SELECT current_database()");
    return res.send(`The database name is : ${result.rows[0].current_database}`);
}));
// Server running
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
