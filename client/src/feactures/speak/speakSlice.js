import { createSlice } from "@reduxjs/toolkit";

const voice = JSON.parse(localStorage.getItem("voice"));

const initialState = {
  voices: [],
  selected: voice ? voice : "",
};

const speakSlice = createSlice({
  name: "speak",
  initialState,
  reducers: {
    getVoices: (state, action) => {
      state.voices = action.payload;
    },
    selectedVoice: (state, action) => {
      state.selected = action.payload;
      localStorage.setItem("voice", JSON.stringify(action.payload));
    },
  },
});

export const { read, getVoices, selectedVoice } = speakSlice.actions;
export default speakSlice.reducer;
