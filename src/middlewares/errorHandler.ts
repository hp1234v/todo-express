const errorHandler = (err: any, req: any, res: any, next: any) => {
    console.log(err.stack);
    res.status(500).json({
        status: 500,
        message: "Something went wrong...!",
        error: err.message
    })
}


export default errorHandler;