import cookie from "cookie";

async function Logout(req, res) {
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
    console.log("🚀 ~ file: logout.js ~ line 15 ~ validateRoute ~ err", err);
  }
}

export default Logout;
