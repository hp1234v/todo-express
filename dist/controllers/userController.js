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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserByid = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const userModel_1 = require("../models/userModel");
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data
    });
};
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const newUser = yield (0, userModel_1.createUserService)(name, email);
        handleResponse(res, 201, "User created successfully", newUser);
    }
    catch (err) {
        next(err);
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, userModel_1.getAllUsersService)();
        handleResponse(res, 200, "Users fetched successfully", newUser);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield (0, userModel_1.getUserByIdService)(id);
        if (!user) {
            return handleResponse(res, 404, "User not found", user);
        }
        handleResponse(res, 200, "User fetched successfully", user);
    }
    catch (err) {
        next(err);
    }
});
exports.getUserById = getUserById;
const updateUserByid = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const { id } = req.params;
    try {
        const updatedUser = yield (0, userModel_1.updateUserService)(id, name, email);
        if (!updatedUser) {
            return handleResponse(res, 404, "User not found", updatedUser);
        }
        handleResponse(res, 201, "User updated successfully", updatedUser);
    }
    catch (err) {
        next(err);
    }
});
exports.updateUserByid = updateUserByid;
const deleteUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedUser = yield (0, userModel_1.deleteUserService)(id);
        if (!deletedUser) {
            return handleResponse(res, 404, "User not found", deletedUser);
        }
        handleResponse(res, 201, "User deleted successfully", deletedUser);
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUserById = deleteUserById;
