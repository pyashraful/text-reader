import React, { useRef, useEffect } from "react";
import "../App.css";
import Box from "../components/Box";
import { useDispatch } from "react-redux";
import { read, getVoices } from "../feactures/speak/speakSlice";
import useRead from "../hooks/useRead";

function Home() {
  const dispatch = useDispatch();
  // const { speakText } = useRead();

  // function speakText(text) {
  //   dispatch(read(text));
  // }

  return <Box />;
}

export default Home;
