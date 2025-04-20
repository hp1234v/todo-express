import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../models/user/userModel";

const handleResponse =  (res: any, status: any, message: any, data: any = null)=>{
    res.status(status).json({
        status,
        message,
        data
    })
}

export const createUser = async (req: any, res: any, next: any) => {
    const { name, email } = req.body;
    try {
        const newUser = await createUserService(name, email);
        handleResponse(res, 201, "User created successfully", newUser);
    } catch (err) {
        next(err);
    }
}

export const getAllUsers = async (req: any, res: any, next: any) => {
    try {
        const newUser = await getAllUsersService();
        handleResponse(res, 200, "Users fetched successfully", newUser);
    } catch (err) {
        next(err);
    }
}

export const getUserById = async (req: any, res: any, next: any) => {
    const { id } = req.params;
    try {
        const user = await getUserByIdService(id);
        if(! user) {
            return handleResponse(res, 404, "User not found", user);
        }
        handleResponse(res, 200, "User fetched successfully", user);
    } catch (err) {
        next(err);
    }
}

export const updateUserByid = async (req: any, res: any, next: any) => {
    const { name, email } = req.body;
    const { id } = req.params
    try {
        const updatedUser = await updateUserService(id, name, email);
        if(! updatedUser) {
            return handleResponse(res, 404, "User not found", updatedUser);
        }
        handleResponse(res, 200, "User updated successfully", updatedUser);
    } catch (err) {
        next(err);
    }
}

export const deleteUserById = async (req: any, res: any, next: any) => {
    const { id } = req.params;
    try {
        if ( id == 1) {
            return handleResponse(res, 403, "Cannot deleted admin");
        }
        const deletedUser = await deleteUserService(id);
        if(! deletedUser) {
            return handleResponse(res, 404, "User not found", deletedUser);
        }
        handleResponse(res, 200, "User deleted successfully", deletedUser);
    } catch (err) {
        next(err);
    }
}
