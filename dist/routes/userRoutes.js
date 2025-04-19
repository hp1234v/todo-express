"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRouter = express_1.default.Router();
userRouter.post("/createUser", userController_1.createUser);
userRouter.get("/users", userController_1.getAllUsers);
userRouter.get("/user/:id", userController_1.getUserById);
userRouter.put("/user/:id", userController_1.updateUserByid);
userRouter.delete("/user/:id", userController_1.deleteUserById);
exports.default = userRouter;
