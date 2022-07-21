import Users from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

async function signup(req, res) {
  console.log("🚀 ~ file: signup.js ~ line 7 ~ signup ~ req", req.body);

  const { name, email, password } = req.body;
  const user = new Users({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });
  try {
    await user.save();
  } catch (err) {
    res.status(401).json({ error: "user already exists" });
    return;
  }
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
}

export default signup;
