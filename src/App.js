import React, { useState, useRef } from "react";
import "./App.css";
import TextBox from "./components/TextBox";
import Box from "./components/Box";

const App = () => {
  const synthRef = useRef(window.speechSynthesis);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState();

  function speakText(text) {
    const utterThis = new SpeechSynthesisUtterance(text);
    synthRef.current.speak(utterThis);
  }

  return (
    <div className="container">
      <h1>Speech Text Reader</h1>
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
        setText={setText}
      />
      <Box speakText={speakText} setText={setText} />
    </div>
  );
};

export default App;
