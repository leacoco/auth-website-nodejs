const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
//Import Routes
const authRoute = require("./routes/auth");

dotenv.config();
const PORT = 3000;

//connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Successfully Connected to DB!!!!");
  }
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api", authRoute);

app.listen(PORT, () => {
  `[INFO] Server is running on port ${PORT}`;
});
