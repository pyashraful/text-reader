import React from "react";
import data from "../data";
import { MdDeleteOutline } from "react-icons/md";

const Box = ({ speakText, setText }) => {
  const res = data();
  // console.log(speakText);
  return (
    <div className="main">
      {res.map((d) => (
        <div key={d.image} className="box_container">
          <div onClick={() => speakText(d.text)} className="box">
            <img src={window.location.origin + `${d.image}`} alt="text" />
            <p className="info">{d.text}</p>
          </div>
          <div className="box_delete">
            <button className="box_delete_btn">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
