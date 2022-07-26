import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import TextBox from "../components/TextBox";
import Box from "../components/Box";
import { useDispatch, useSelector } from "react-redux";
import { read } from "../feactures/speak/speakSlice";

function Home() {
  const synthRef = useRef(window.speechSynthesis);
  const [toggle, setToggle] = useState(false);
  const [voices, setVoices] = useState();
  const [selected, setSelected] = useState();

  const dispatch = useDispatch();

  function speakText(text) {
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voices.find((voice) => voice.name === selected);
    synthRef.current.speak(utterThis);

    dispatch(read("hello world"));
  }

  useEffect(() => {
    setVoices(synthRef.current.getVoices());
  }, []);

  return (
    <>
      {/* <h1>Speech Text Reader</h1> */}

      <button
        type="button"
        onClick={() => setToggle(!toggle)}
        className="btn btn-toggle"
      >
        Toggle Text Box
      </button>
      <TextBox
        setToggle={setToggle}
        toggle={toggle}
        speakText={speakText}
        voices={voices}
        setVoices={setVoices}
        setSelected={setSelected}
      />
      <Box speakText={speakText} />
    </>
  );
}

export default Home;
