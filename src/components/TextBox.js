import React from "react";

const TextBox = ({ toggle }) => {
  return (
    <div className="text-box">
      <div className="close">X</div>
      <h3>Choose Voice</h3>
      <select className="voices"></select>
      <textarea placeholder="Enter text to read..."></textarea>
      <button className="btn">Read Text</button>
    </div>
  );
};

export default TextBox;
