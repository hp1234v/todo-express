import { pool } from "../../configs/db";
import { todoModelSQl } from "./todoModel.const";

export const getAllTodosService = async () => {
    const result = await pool.query(todoModelSQl.getAllTodos);
    return result.rows;
};

export const getTodoByIdService = async (id: number) => {
    const result = await pool.query(todoModelSQl.getTodoById, [id]);
    return result.rows;
};

export const createTodoService = async (name: string, email: string) => {
    const result = await pool.query(todoModelSQl.createTodo, [name, email]);
    return result.rows;
};

export const updateTodoService = async (id: number, name: string, email: string) => {
    const result = await pool.query(todoModelSQl.updateTodo, [name, email, id]);
    return result.rows;
};

export const deleteTodoService = async (id: number) => {
    const result = await pool.query(todoModelSQl.deleteTodo, [id]);
    return result.rows;
};

