import api from "../../app/api";

const register = async (userData) => {
  const response = await api.post("users", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await api.post("users/signin", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  const response = await api.post("users/logout");

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
