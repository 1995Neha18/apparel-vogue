import express from "express";

const app = express();
const port = 3100;

app.get("/product", (req, res) => {
  res.send("vhbsdjsb");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
