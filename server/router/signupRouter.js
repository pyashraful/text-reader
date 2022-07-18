import express from "express";
// import signup from "../controller/signup.js";
// // import signin from "../controller/signin";

import signup from "../controller/signup.js";

const router = express.Router();

router.get("/", signup);

export default router;
