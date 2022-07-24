import { uploadFile } from "../utils/s3.js";
import Card from "../model/card.js";
import fs from "fs";
import util from "util";

const unlinkFile = util.promisify(fs.unlink);

async function imageUpload(req, res) {
  const { file, user } = req;
  const text = req.body.text;

  console.log(
    "🚀 ~ file: iamgeController.js ~ line 6 ~ imageUpload ~ text",
    file
  );
  try {
    const result = await uploadFile(file);
    const card = new Card({
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

  res.send("massage: 👍");
}

export default imageUpload;
