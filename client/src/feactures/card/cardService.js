import api from "../../app/api";
const API_URL = "cards";

const getCards = async () => {
  const response = await api.get(API_URL);

  return response.data;
};

const setCard = async (fromData) => {
  const response = await api.post(API_URL, fromData);

  return response.data;
};

const deleteCard = async (id) => {
  const response = await api.delete(API_URL + id);
  return response.data;
};
const editCard = async (data) => {
  const { id, formData } = data;

  const response = await api.put(API_URL + id, formData);

  return response.data;
};

const cardService = {
  getCards,
  setCard,
  deleteCard,
  editCard,
};

export default cardService;
