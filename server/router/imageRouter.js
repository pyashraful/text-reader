import express from "express";
import iamgeController from "../controller/iamgeController.js";
import validate from "../middlewares/validate.js";
import upload from "../middlewares/uploader.js";

const router = express.Router();

router.post("/", validate, upload.single("file"), iamgeController);

export default router;
