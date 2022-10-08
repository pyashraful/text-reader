import axios from "axios";

const register = async (userData) => {
  const response = await axios.post("/api/users", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post("/api/users/signin", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  const response = await axios.post("/api/users/logout");

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
