import React, { useState } from "react";

export default function DropBox({ children }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`text-box ${toggle ? "show" : ""}  `}>
      <div onClick={() => setToggle(!toggle)} className="close">
        X
      </div>
      {children}
    </div>
  );
}
