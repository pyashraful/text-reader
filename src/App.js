import React, { useState } from "react";
import "./App.css";
import TextBox from "./components/TextBox";
import Box from "./components/Box";

const App = () => {
  const [toggle, setToggle] = useState(false);
  // function show() {
  //   console.log("hy");
  // }
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
      <TextBox toggle={toggle} />
      <Box />
    </div>
  );
};

export default App;
