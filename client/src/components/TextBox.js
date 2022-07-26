import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getVoices } from "../feactures/speak/speakSlice";

const TextBox = ({ toggle, setToggle, speakText, setSelected }) => {
  const [massage, setMassage] = useState("");
  const [selectedOption, setSelectedOption] = useState();

  const { voices } = useSelector((state) => state.speak);
  console.log("🚀 ~ file: TextBox.js ~ line 10 ~ TextBox ~ voices", voices);

  function handleChange(e) {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
    setSelected(selectedOption);
  }

  // useEffect(() => {
  //   setSelectedOption(voices ? voices[0].name : "");
  // }, [voices]);

  return (
    <div className={`text-box ${toggle ? "show" : ""}  `}>
      <div onClick={() => setToggle(!toggle)} className="close">
        X
      </div>
      <h3>Choose Voice</h3>
      <select className="voices" value={selectedOption} onChange={handleChange}>
        {voices &&
          voices.map((voice, index) => (
            <option key={index} value={voice}>
              {voice}
            </option>
          ))}
      </select>
      <textarea
        value={massage}
        onChange={(e) => setMassage(e.target.value)}
        placeholder="Enter text to read..."
      ></textarea>
      <button onClick={() => speakText(massage)} className="btn text_btn">
        Read Text
      </button>
    </div>
  );
};

export default TextBox;
