"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        status: 500,
        message: "Something went wrong...!",
        error: err.message
    });
};
exports.default = errorHandler;
