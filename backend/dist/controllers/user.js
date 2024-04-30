import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        return next(new Error("Error"));
        const { name, email, gender, _id, imageUrl, dob } = req.body;
        // console.log(name, email, gender, _id, imageUrl, dob);
        const user = await User.create({
            _id,
            name,
            email,
            gender,
            imageUrl,
            dob: new Date(dob),
        });
        return res.status(200).json({
            success: true,
            message: `Welcome ${user.name}`,
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error,
        });
    }
};
