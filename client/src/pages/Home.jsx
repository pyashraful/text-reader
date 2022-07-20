import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import TextBox from "../components/TextBox";
import Box from "../components/Box";

function Home() {
  const synthRef = useRef(window.speechSynthesis);
  const chRef = useRef(window.speechSynthesis);
  const [toggle, setToggle] = useState(false);
  const [voices, setVoices] = useState();
  const [selected, setSelected] = useState();

  function speakText(text) {
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voices.find((voice) => voice.name === selected);
    synthRef.current.speak(utterThis);
  }

  useEffect(() => {
    setVoices(synthRef.current.getVoices());
  }, []);

  console.log(synthRef);
  console.log(chRef.current);
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
