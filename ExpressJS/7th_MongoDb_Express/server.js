import express from "express";
import mongoose from "mongoose";
const app = express();
mongoose.connect(
  "mongodb+srv://rajuyadav91391:YgqTyqm9ZDzN0vMy@cluster0.qqyaqu1.mongodb.net/",
  { dbName: "NodeJs Mastery Course" }
).
  then(() => console.log("MongoDb connected")).catch((err) => console.log(err));
const port = 3000;

app.listen(port, () => console.log(`server is running ${port}`));
