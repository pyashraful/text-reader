import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
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
    getVoices: (state, action) => {
      state.voices = action.payload;
    },
    read: (state, action) => {
      const synth = window.speechSynthesis;
      const utter = new SpeechSynthesisUtterance(action.payload);
      // state.voices.push(...synth.getVoices());
      // const vo = synth.getVoices();
      // console.log("🚀 ~ file: speakSlice.js ~ line 29 ~ vo", vo);
      // state.voices.push(...vo.map((v) => v.name));
      // console.log(
      //   "🚀 ~ file: speakSlice.js ~ line 31 ~ state.voices",
      //   state.voices
      // );
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

export const { read, getVoices } = speakSlice.actions;
export default speakSlice.reducer;
