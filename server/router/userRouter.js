import express from "express";
import { signin, signup, logout } from "../controller/userController.js";

const router = express.Router();

router.post("/", signup);
router.post("/signin", signin);
router.post("/logout", logout);

export default router;
