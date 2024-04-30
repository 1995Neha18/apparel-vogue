import express, { NextFunction, Request, Response } from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { Error } from "mongoose";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();
const port = 4000;

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/api/v1/user", userRoute);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
