import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";

export const newUser = async (
  req: Request<{}, {}, NewUserRequestBody>,

  res: Response,
  next: NextFunction
) => {
  try {
    console.log("role");
    const { name, email, gender, _id, imageUrl, dob } = req.body;
    console.log(name, email, gender, _id, imageUrl, dob);

    const user = await User.create({
      _id,
      name,
      email,
      gender,
      imageUrl,
      dob,
    });
    return res.status(200).json({
      success: true,
      message: `Welcome ${user.name}`,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error,
    });
  }
};
