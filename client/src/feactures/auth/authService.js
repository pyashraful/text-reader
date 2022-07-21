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
  return response.data;
};

const logout = async () => {
  const response = await axios.post("/logout");

  if (response.status === 200) {
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
