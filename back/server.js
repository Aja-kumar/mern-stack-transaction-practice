import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors);

app.get("/", (req, res) => {
  res.send("hello world");
});

await mongoose.connect(
  "mongodb+srv://ajay:ajay1234@cluster0.0i6ly90.mongodb.net/?retryWrites=true&w=majority"
);
console.log("mongodb connected");

const PORT = 8000;
app.listen(8000, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
