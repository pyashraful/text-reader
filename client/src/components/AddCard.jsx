import React, { useState } from "react";
import DropBox from "./DropBox";
import classes from "../styles/AddCard.module.css";
import FileInput from "./FileInput";

function AddCard() {
  const [toggle, setToggle] = useState(false);
  const [image, setImage] = useState();
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>add card</button>
      <DropBox toggle={toggle} setToggle={setToggle}>
        <h2>Add Card</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.file_container}>
            <FileInput image={image} setImage={setImage} />
          </div>
          {/* <textarea
            className={classes.file_textarea}
            placeholder="Enter text here..."
          ></textarea> */}
          <input
            type="text"
            placeholder="Enter text here..."
            value={text}
            onChange={onChange}
          />
          <button>Submit</button>
        </form>
      </DropBox>
    </>
  );
}

export default AddCard;
