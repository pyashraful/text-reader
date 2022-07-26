import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  synth: null,
  utter: null,
  voices: [],
  selected: "",
};

// const speak = createAsyncThunk("speak/read", async (text, thunkApi) => {
//   try {
//     return await thunkApi.resolve(text);
//   } catch (error) {
//     const massage =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     return thunkApi.rejectWithValue({ massage });
//   }
// });

const speakSlice = createSlice({
  name: "speak",
  initialState,
  reducers: {
    read: (state, action) => {
      const synth = window.speechSynthesis;
      const utter = new SpeechSynthesisUtterance(action.payload);
      synth.speak(utter);
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(speak.fulfilled, (state, action) => {
  //     state.synth = window.speechSynthesis;
  //     state.utter = new SpeechSynthesisUtterance(action.payload);
  //     state.synth.speak(state.utter);
  //   });
  // },
});

export const { read } = speakSlice.actions;
export default speakSlice.reducer;
