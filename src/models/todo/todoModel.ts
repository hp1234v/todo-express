import { pool } from "../../configs/db";
import { statusData, todoModelSQl } from "./todoModel.const";

const dateConvertion = (dueDate: any) => {
    const [day, month, year] = dueDate.split("-");

    // Create a Date object (note: month is 0-indexed in JS)
    const dateObj = new Date(year, month - 1, day);

    // Get timestamp (in milliseconds since Unix epoch)
    const timestamp = dateObj.getTime();
    return new Date(timestamp).toISOString(); // "2025-05-01T00:00:00.000Z"
}

export const getAllTodosService = async () => {
    const result = await pool.query(todoModelSQl.getAllTodos);
    return result.rows;
};

export const getTodoByIdService = async (id: number) => {
    const result = await pool.query(todoModelSQl.getTodoById, [id]);
    return result.rows;
};

export const createTodoService = async (name: string, createdBy: number, description: string, status: string, dueDate: any) => {
    const bindParams = [name, description, dateConvertion(dueDate), createdBy, statusData[status]];
    const result = await pool.query(todoModelSQl.createTodo, bindParams);
    return result.rows;
};

export const updateTodoService = async (id: number, name: string, createdBy: number, description: string, status: string, dueDate: any) => {
    const bindParams = [id, name, description, dateConvertion(dueDate), createdBy, statusData[status]];
    const result = await pool.query(todoModelSQl.updateTodo, bindParams);
    return result.rows;
};

export const deleteTodoService = async (id: number) => {
    const result = await pool.query(todoModelSQl.deleteTodo, [id]);
    return result.rows;
};

