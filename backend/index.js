const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectToDB } = require("./src/config/db");
const { trackRouter } = require("./src/api/routes/track-routes");

const app = express();
app.use(express.json({ limit: "50mb" }));
dotenv.config();

app.use(cors());

app.use("/api/v1/tracks", trackRouter);

app.use("*", (req, res, next) => {
  res.send("Route Not Found");
  console.log("Route Not Found");
});

const PORT = process.env.PORT;
app.listen(PORT || 3200, () => {
  connectToDB();
  console.log(`App is listening to port ${PORT} 😉`);
});
