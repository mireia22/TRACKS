const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectToDB } = require("./src/config/db");
const { mainRouter } = require("./src/api/routes/main-router");
const cloudinary = require("cloudinary").v2;

const app = express();
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,

  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json({ limit: "50mb" }));

app.use(cors());

app.use("/api/v1", mainRouter);

app.use("*", (req, res, next) => {
  res.send("Route Not Found");
  console.log("Route Not Found");
});

const PORT = process.env.PORT;
app.listen(PORT || 3200, () => {
  connectToDB();
  console.log(`App is listening to port ${PORT} 😉`);
});
