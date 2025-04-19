import Joi from "joi";

const UserSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required()
})

const validateUser = (req: any, res: any, next: any) => {
    const { error } = UserSchema.validate(req.body);
    if (error) return res.status(400).json({
        status: 400,
        message: error.details[0].message
    });
    next();
};

export default validateUser;