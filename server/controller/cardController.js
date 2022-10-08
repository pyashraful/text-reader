import { uploadFile, deleteFile } from "../utils/s3.js";
import Card from "../model/card.js";
import fs from "fs";
import util from "util";

const unlinkFile = util.promisify(fs.unlink);

export async function setCard(req, res) {
  const { file, user } = req;
  const text = req.body.text;

  let card;
  try {
    const result = await uploadFile(file);
    card = new Card({
      text,
      imageUrl: result.Location,
      imageKey: result.Key,
      user: user._id,
    });
    await card.save();
    await unlinkFile(file.path);
  } catch (error) {
    console.log(
      "🚀 ~ file: iamgeController.js ~ line 18 ~ imageUpload ~ error",
      error
    );
  }

  res.send(card);
}

export async function getCard(req, res) {
  const id = req.user;

  const cards = await Card.find({ user: id });

  res.status(200).json(cards);
}

export const deleteCard = async (req, res) => {
  const { id } = req.params;
  try {
    const card = await Card.findById(id);
    if (!card) {
      res.status(404).send("massage: 👎");
    }
    await deleteFile(card.imageKey);
    await Card.deleteOne({ _id: id });
  } catch (error) {}

  res.status(200).json({ id });
};

export const editCard = async (req, res) => {
  const { id } = req.params;
  const { file } = req;
  const text = req.body.text;
  try {
    const card = await Card.findById(id);
    if (!card) {
      res.status(404).send("massage: 👎");
    }
    if (file) {
      const result = await uploadFile(file);
      await deleteFile(card.imageKey);
      await unlinkFile(file.path);
      card.imageUrl = result.Location;
      card.imageKey = result.Key;
    }
    card.text = text;
    await Card.findByIdAndUpdate(card.id, card);
    res.status(200).json(card);
  } catch (error) {
    res.status(500).send(error);
  }
};
