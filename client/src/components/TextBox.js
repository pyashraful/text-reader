import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { read, selecteText } from "../feactures/speak/speakSlice";

const TextBox = () => {
  const [toggle, setToggle] = useState(false);
  const [massage, setMassage] = useState("");
  const dispatch = useDispatch();
  const { voices, selected } = useSelector((state) => state.speak);

  function handleChange(e) {
    dispatch(selecteText(e.target.value));
  }

  return (
    <>
      <div onClick={() => setToggle(!toggle)} className="nav_button">
        Text Box
      </div>
      <div className={`text-box ${toggle ? "show" : ""}  `}>
        <div onClick={() => setToggle(!toggle)} className="close">
          X
        </div>
        <h3>Choose Voice</h3>
        <select className="voices" value={selected} onChange={handleChange}>
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
        <button
          onClick={() => dispatch(read(massage))}
          className="btn text_btn"
        >
          Read Text
        </button>
      </div>
    </>
  );
};

export default TextBox;
