import express from 'express';
import { createTodo, deleteTodoById, getAllTodos, getTodoById, updateTodoByid } from '../controllers/todoController';
import validateTodo from '../middlewares/validators/validateTodo';

const todoRoutes = express.Router();

todoRoutes.post("/todo", validateTodo, createTodo)
todoRoutes.get("/todos", getAllTodos)
todoRoutes.get("/todo/:id", getTodoById)
todoRoutes.put("/todo/:id", validateTodo, updateTodoByid)
todoRoutes.delete("/todo/:id", deleteTodoById)

export default todoRoutes;