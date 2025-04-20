import express from 'express';
import { createTodo, deleteTodoById, getAllTodos, getTodoById, updateTodoByid } from '../controllers/todoController';
import validateUser from '../middlewares/inputValidator';

const todoRoutes = express.Router();

todoRoutes.post("/createTodo", validateUser, createTodo)
todoRoutes.get("/todos", getAllTodos)
todoRoutes.get("/todo/:id", getTodoById)
todoRoutes.put("/todo/:id", validateUser, updateTodoByid)
todoRoutes.delete("/todo/:id", deleteTodoById)

export default todoRoutes;