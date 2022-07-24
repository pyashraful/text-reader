import jwt from "jsonwebtoken";
import User from "../model/user.js";

async function validate(req, res, next) {
  const token = req.cookies.TOKEN;

  if (token) {
    let user;

    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET);
      console.log("🚀 ~ file: validate.js ~ line 12 ~ validate ~ id", id);
      user = await User.findById(id);
      console.log("🚀 ~ file: validate.js ~ line 15 ~ validate ~ user", user);
      if (!user) {
        console.log(
          "🚀 ~ file: validate.js ~ line 17 ~ validate ~ Unauthorized"
        );
        return res.status(401).send("Unauthorized");
      } else {
        console.log("🚀 ~ file: validate.js ~ line 20 ~ validate ~ ok");
        req.user = user;
        next();
      }
    } catch (e) {
      console.log("🚀 ~ file: validate.js ~ line 24 ~ validate ~ e", e);
      return res.status(401).send("Unauthorized");
    }
  } else {
    console.log("🚀 ~ file: validate.js ~ line 29 ~ validate ~ Unauthorized");
    return res.status(401).send("Unauthorized");
  }
}

export default validate;
