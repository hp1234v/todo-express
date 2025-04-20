import { createTodoService, deleteTodoService, getAllTodosService, getTodoByIdService, updateTodoService } from "../models/todo/todoModel";

const handleResponse =  (res: any, status: any, message: any, data: any = null)=>{
    res.status(status).json({
        status,
        message,
        data
    })
}

export const createTodo = async (req: any, res: any, next: any) => {
    const { name, createdBy, description, status, dueDate } = req.body;
    try {
        const newTodo = await createTodoService(name, Number(createdBy), description, status, dueDate);
        handleResponse(res, 201, "Todo created successfully", newTodo);
    } catch (err) {
        next(err);
    }
}

export const getAllTodos = async (req: any, res: any, next: any) => {
    try {
        const newTodo = await getAllTodosService();
        handleResponse(res, 200, "Todos fetched successfully", newTodo);
    } catch (err) {
        next(err);
    }
}

export const getTodoById = async (req: any, res: any, next: any) => {
    const { id } = req.params;
    try {
        const todo = await getTodoByIdService(id);
        if(todo?.length === 0) {
            return handleResponse(res, 404, "Todo not found", todo);
        }
        handleResponse(res, 200, "Todo fetched successfully", todo);
    } catch (err) {
        next(err);
    }
}

export const updateTodoByid = async (req: any, res: any, next: any) => {
    const { name, createdBy, description, status, dueDate } = req.body;
    const { id } = req.params
    try {
        const updatedTodo = await updateTodoService(id, name, createdBy, description, status, dueDate);
        if(! updatedTodo) {
            return handleResponse(res, 404, "Todo not found", updatedTodo);
        }
        handleResponse(res, 200, "Todo updated successfully", updatedTodo);
    } catch (err) {
        next(err);
    }
}

export const deleteTodoById = async (req: any, res: any, next: any) => {
    const { id } = req.params;
    try {
        const deletedTodo = await deleteTodoService(id);
        if(! deletedTodo) {
            return handleResponse(res, 404, "Todo not found", deletedTodo);
        }
        handleResponse(res, 200, "Todo deleted successfully", deletedTodo);
    } catch (err) {
        next(err);
    }
}
