import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/user.js";
import cookie from "cookie";

async function signin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("TOKEN", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
    );
    res.json(user);
  } else {
    res.status(401).json({ error: "Email or Password is wrong" });
  }
}

export default signin;
