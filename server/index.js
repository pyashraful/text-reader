import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import signinRouter from "./router/signinRouter.js";
import signupRouter from "./router/signupRouter.js";
import logoutRouter from "./router/logoutRouter.js";

const app = express();
dotenv.config();

const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log(
  "🚀 ~ file: index.js ~ line 21 ~ process.env.MONGO_CONNECTION_STRING",
  process.env.MONGO_CONNECTION_STRING
);
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

// mongoose
//   .connect(process.env.MONGO_CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("database connection successful!"))
//   .catch((err) => console.log(err));

//Router
app.use("/signin", signinRouter);
app.use("/signup", signupRouter);
app.use("/logout", logoutRouter);

server.listen(process.env.PORT || 5000, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
