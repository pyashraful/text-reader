import React from "react";
import data from "../data";

const Box = () => {
  const res = data();
  console.log(res);
  return res.map((d) => (
    <div className="box" key={d.image}>
      <img src={d.image} alt="text" />
      <p className="info">{d.text}</p>
    </div>
  ));
};

export default Box;
