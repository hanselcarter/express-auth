const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

//import routes
const authRoute = require("./routes/auth");
//connect to fb
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);
//middleware
app.use(express.json());
//routes middleware
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("server running"));
