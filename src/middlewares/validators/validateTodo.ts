import Joi from "joi";

const TodoSchema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().max(100).required(),
    status: Joi.string().max(100).required(),
    createdBy: Joi.number().required(),
    dueDate: Joi.string().min(10).max(10).required()
})

const validateTodo = (req: any, res: any, next: any) => {
    const { error } = TodoSchema.validate(req.body);
    if (error) return res.status(400).json({
        status: 400,
        message: error.details[0].message
    });
    next();
};

export default validateTodo;