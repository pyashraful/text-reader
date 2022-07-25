import axios from "axios";

const API_URL = "/signup";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post("/signin", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  console.log(
    "🚀 ~ file: authService.js ~ line 17 ~ login ~ response.data",
    response.data
  );
  return response.data;
};

const logout = async () => {
  const response = await axios.post("/logout");
  console.log(
    "🚀 ~ file: authService.js ~ line 24 ~ logout ~ response",
    response
  );
  console.log("authService logout");

  if (response.status === 200) {
    console.log("logged out");
    localStorage.removeItem("user");
  }

  return response.data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
