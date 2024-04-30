export const errorMiddleware = (err, req, res, next) => {
    // err.message = err.message || "";
    err.message || (err.message = "Internal Server Error");
    return res.status(400).json({
        success: true,
        message: err.message,
    });
};
