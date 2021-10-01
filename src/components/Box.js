import React from "react";
import data from "../data";

const Box = ({ speakText, setText }) => {
  const res = data();
  // console.log(speakText);
  return (
    <div className="main">
      {res.map((d) => (
        <div onClick={() => speakText(d.text)} className="box" key={d.image}>
          <img src={window.location.origin + `${d.image}`} alt="text" />
          <p className="info">{d.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Box;
