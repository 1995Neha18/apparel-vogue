import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Please enter your ID"],
    },
    imageUrl: {
        type: String,
        required: [true, "Please enter your image"],
    },
    name: {
        type: String,
        required: [true, "Please enter your Name"],
    },
    email: {
        type: String,
        unique: [true, "Email Already Exists"],
        required: [true, "Please enter your Name"],
        validate: validator.default.isEmail,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please enter your Gender"],
    },
    dob: {
        type: Date,
        required: [true, "Please enter your Date of birth"],
    },
}, {
    timestamps: true,
});
schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
});
export const User = mongoose.model("User", schema);
