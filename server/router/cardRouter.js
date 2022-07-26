import express from "express";
import { setCard, getCard, deleteCard } from "../controller/cardController.js";
import validate from "../middlewares/validate.js";
import upload from "../middlewares/uploader.js";

const router = express.Router();

router
  .get("/", validate, getCard)
  .post("/", validate, upload.single("file"), setCard);

router.delete("/:id", validate, deleteCard);

export default router;
