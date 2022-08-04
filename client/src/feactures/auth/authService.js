import axios from "axios";

const register = async (userData) => {
  const response = await axios.post("/api/signup/", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post("/api/signin/", userData);
  console.log(
    "🚀 ~ file: authService.js ~ line 15 ~ login ~ response",
    response
  );

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
  const response = await axios.post("/api/logout/");
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
