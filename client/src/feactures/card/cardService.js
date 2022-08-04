import axios from "axios";

const API_URL = "/api/cards/";
const config = {
  withCredentials: true,
};

const getCards = async () => {
  const response = await axios.get(API_URL, config);
  // if (response.data) {
  //   localStorage.setItem("card", JSON.stringify(response.data));
  // }
  return response.data;
};

const setCard = async (fromData) => {
  const response = await axios.post(API_URL, fromData, config);
  console.log(
    "🚀 ~ file: cardService.js ~ line 17 ~ setCard ~ response",
    response.data
  );
  return response.data;
};

const deleteCard = async (id) => {
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};
const editCard = async (data) => {
  const { id, formData } = data;
  console.log("🚀 ~ file: cardService.js ~ line 30 ~ editCard ~ id", id);
  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  const response = await axios.put(API_URL + id, formData, config);
  console.log(
    "🚀 ~ file: cardService.js ~ line 36 ~ editCard ~ response",
    response
  );
  return response.data;
};

const cardService = {
  getCards,
  setCard,
  deleteCard,
  editCard,
};

export default cardService;
