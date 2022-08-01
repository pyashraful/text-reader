import React, { useRef, useEffect } from "react";
import "../App.css";
import Box from "../components/Box";
import { useDispatch } from "react-redux";
import { read, getVoices } from "../feactures/speak/speakSlice";

function Home() {
  const dispatch = useDispatch();

  function speakText(text) {
    dispatch(read(text));
  }

  return <Box speakText={speakText} />;
}

export default Home;
