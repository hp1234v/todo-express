import express from 'express';
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserByid } from '../controllers/userController';
import validateUser from '../middlewares/inputValidator';

const userRouter = express.Router();

userRouter.post("/createUser", validateUser, createUser)
userRouter.get("/users", getAllUsers)
userRouter.get("/user/:id", getUserById)
userRouter.put("/user/:id", validateUser, updateUserByid)
userRouter.delete("/user/:id", deleteUserById)

export default userRouter;