import express from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/user.js";

import path from "path";

const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");

// MongoDB connection
mongoose.connect(
  "mongodb+srv://rajuyadav91391:YgqTyqm9ZDzN0vMy@cluster0.qqyaqu1.mongodb.net/",
  { dbName: "NodeJs_Mastery_Course" }
).then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err));

const port = 3000;

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form-submit", userRegister);

app.listen(port, () => console.log(`server is running on port ${port}`));
