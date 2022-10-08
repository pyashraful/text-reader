import jwt from "jsonwebtoken";
import User from "../model/user.js";

async function validate(req, res, next) {
  const token = req.cookies.TOKEN;

  if (token) {
    let user;

    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET);

      user = await User.findById(id);

      if (!user) {
        return res.status(401).send("Unauthorized");
      } else {
        req.user = user;
        next();
      }
    } catch (e) {
      return res.status(401).send("Unauthorized");
    }
  } else {
    return res.status(401).send("Unauthorized");
  }
}

export default validate;
