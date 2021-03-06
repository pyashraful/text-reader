import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import signinRouter from "./router/signinRouter.js";
import signupRouter from "./router/signupRouter.js";
import logoutRouter from "./router/logoutRouter.js";
import cardRouter from "./router/cardRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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
app.use("/card", cardRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
