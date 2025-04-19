import { pool } from "../configs/db";

export const getAllUsersService = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};

export const getUserByIdService = async (id: number) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1 LIMIT 1", [id]);
    return result.rows;
};

export const createUserService = async (name: string, email: string) => {
    const result = await pool.query(
        "INSERT INTO USERS (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
    return result.rows;
};

export const updateUserService = async (id: number, name: string, email: string) => {
    const result = await pool.query("UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURING *", [name, email, id]);
    return result.rows;
};

export const deleteUserService = async (id: number) => {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
    return result.rows;
};

