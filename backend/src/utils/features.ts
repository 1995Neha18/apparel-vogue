import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "Ecommerce 24",
    })
    .then((c) => console.log(`DB connected to ${c.connection.host}`))
    .catch((e: any) => console.log(e));
};
