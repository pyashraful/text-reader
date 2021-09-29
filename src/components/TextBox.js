import React from "react";

const TextBox = ({ toggle, setToggle }) => {
  return (
    <div className={`text-box ${toggle ? "show" : ""}  `}>
      <div onClick={() => setToggle(!toggle)} className="close">
        X
      </div>
      <h3>Choose Voice</h3>
      <select className="voices"></select>
      <textarea placeholder="Enter text to read..."></textarea>
      <button className="btn">Read Text</button>
    </div>
  );
};

export default TextBox;
