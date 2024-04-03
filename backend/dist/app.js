import express from "express";
const app = express();
const port = 3100;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
