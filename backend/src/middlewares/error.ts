import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // err.message = err.message || "";
  err.message ||= "Internal Server Error";
  return res.status(400).json({
    success: true,
    message: err.message,
  });
};
