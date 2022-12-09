import Users from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import User from "../model/user.js";

export async function signup(req, res) {
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
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "8h",
  });
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

export async function signin(req, res) {
  console.log("🚀 ~ file: userController.js:36 ~ signin ~ req", req);
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });
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

export async function logout(req, res) {
  try {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("TOKEN", "", {
        maxAge: -1,
        path: "/",
      })
    );

    res.send({ message: "Logout success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
