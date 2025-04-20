import { pool } from "../../configs/db";
import { userModelSQl } from "./userModel.const";

export const getAllUsersService = async () => {
    const result = await pool.query(userModelSQl.getAllUsers);
    return result.rows;
};

export const getUserByIdService = async (id: number) => {
    const result = await pool.query(userModelSQl.getUserById, [id]);
    return result.rows;
};

export const createUserService = async (name: string, email: string) => {
    const result = await pool.query(userModelSQl.createUser, [name, email]);
    return result.rows;
};

export const updateUserService = async (id: number, name: string, email: string) => {
    const result = await pool.query(userModelSQl.updateUser, [name, email, id]);
    return result.rows;
};

export const deleteUserService = async (id: number) => {
    const result = await pool.query(userModelSQl.deleteUser, [id]);
    return result.rows;
};

