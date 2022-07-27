import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  voices: [],
  selected: "",
};

const speakSlice = createSlice({
  name: "speak",
  initialState,
  reducers: {
    getVoices: (state, action) => {
      state.voices = action.payload;
    },
    selecteText: (state, action) => {
      state.selected = action.payload;
    },
    read: (state, action) => {
      const synth = window.speechSynthesis;
      const utter = new SpeechSynthesisUtterance(action.payload);
      utter.voice = synth.getVoices().find((v) => v.name === state.selected);
      synth.speak(utter);
    },
  },
});

export const { read, getVoices, selecteText } = speakSlice.actions;
export default speakSlice.reducer;
