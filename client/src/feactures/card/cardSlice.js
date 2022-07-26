import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cardService from "./cardService";
import data from "../../data";

const initialState = {
  cards: [...data()],
  isLoading: false,
  isError: true,
  isSuccess: false,
  massage: "",
};

export const getCard = createAsyncThunk("card/getCard", async (_, thunkAPI) => {
  try {
    return await cardService.getCards();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const setCard = createAsyncThunk(
  "card/setCard",
  async (fromData, thunkAPI) => {
    try {
      return await cardService.setCard(fromData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "card/deleteCard",
  async (id, thunkAPI) => {
    try {
      return await cardService.deleteCard(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.massage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cards.push(...action.payload);
      })
      .addCase(getCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(setCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.cards.push(action.payload);
      })
      .addCase(setCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cards = state.cards.filter(
          (card) => card._id !== action.payload.id
        );
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cardSlice.actions;
export default cardSlice.reducer;
