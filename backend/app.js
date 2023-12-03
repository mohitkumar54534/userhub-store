//8TvbN9BIkQ1rN4sC
//app.js
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/users", router); // localhost:5000/books


mongoose
  .connect(
   "mongodb+srv://Mohit:8TvbN9BIkQ1rN4sC@cluster0.irv5cd4.mongodb.net/userstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(6002);
  })
  .catch((err) => console.log(err));