import express from "express";

import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
const app = express();
dotenv.config();

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("database connection successful!"))
  .catch((err) => console.log(err));

server.listen(process.env.PORT || 5000, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
