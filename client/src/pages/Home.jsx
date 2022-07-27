import React, { useRef, useEffect } from "react";
import "../App.css";
import Box from "../components/Box";
import { useDispatch } from "react-redux";
import { read, getVoices } from "../feactures/speak/speakSlice";

function Home() {
  const synthRef = useRef(window.speechSynthesis);

  const dispatch = useDispatch();

  function speakText(text) {
    dispatch(read(text));
  }

  useEffect(() => {
    const vo = synthRef.current.getVoices().map((v) => v.name);
    dispatch(getVoices([...vo]));
  }, [dispatch]);

  return <Box speakText={speakText} />;
}

export default Home;
