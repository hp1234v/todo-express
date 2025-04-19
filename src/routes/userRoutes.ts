import express from 'express';
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserByid } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post("/createUser", createUser)
userRouter.get("/users", getAllUsers)
userRouter.get("/user/:id", getUserById)
userRouter.put("/user/:id", updateUserByid)
userRouter.delete("/user/:id", deleteUserById)

export default userRouter;