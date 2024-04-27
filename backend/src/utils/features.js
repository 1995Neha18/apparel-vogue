import mongoose from "mongoose";
export const connectDB = () => {
    mongoose
        .connect("mongodb://localhost:27017", {
        dbName: "Ecommerce 24",
    })
        .then((res) => console.log(`DB connected to ${res.connection.host}`))
        .catch((e) => console.log(e));
};
