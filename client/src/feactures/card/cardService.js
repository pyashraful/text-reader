import axios from "axios";

const config = {
  withCredentials: true,
};

const getCards = async () => {
  const response = await axios.get("/card", config);
  // if (response.data) {
  //   localStorage.setItem("card", JSON.stringify(response.data));
  // }
  return response.data;
};

const setCard = async (fromData) => {
  const response = await axios.post("/card", fromData, config);
  console.log(
    "🚀 ~ file: cardService.js ~ line 17 ~ setCard ~ response",
    response.data
  );
  return response.data;
};

const deleteCard = async (id) => {
  const response = await axios.delete(`/card/${id}`, config);
  return response.data;
};
const editCard = async (id, fromData) => {
  const response = await axios.put(`/card/${id}`, fromData, config);
  return response.data;
};

const cardService = {
  getCards,
  setCard,
  deleteCard,
  editCard,
};

export default cardService;
