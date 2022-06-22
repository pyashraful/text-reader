import express from "express";

import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
const app = express();
dotenv.config();

const server = http.createServer(app);

server.listen(process.env.PORT || 5000, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
