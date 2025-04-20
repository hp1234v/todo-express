import express from 'express';
import { createTodo, deleteTodoById, getAllTodos, getTodoById, updateTodoByid } from '../controllers/todoController';

const todoRoutes = express.Router();

todoRoutes.post("/createTodo", createTodo)
todoRoutes.get("/todos", getAllTodos)
todoRoutes.get("/todo/:id", getTodoById)
todoRoutes.put("/todo/:id", updateTodoByid)
todoRoutes.delete("/todo/:id", deleteTodoById)

export default todoRoutes;