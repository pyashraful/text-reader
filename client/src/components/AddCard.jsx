import React, { useState } from "react";
import DropBox from "./DropBox";
import classes from "../styles/AddCard.module.css";
import FileInput from "./FileInput";

function AddCard() {
  const [toggle, setToggle] = useState(false);
  const [image, setImage] = useState();
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>add card</button>
      <DropBox toggle={toggle} setToggle={setToggle}>
        <h2>Add Card</h2>
        <div className={classes.file_container}>
          <FileInput image={image} setImage={setImage} />
        </div>
        <textarea
          className={classes.file_textarea}
          placeholder="Enter text here..."
        ></textarea>
      </DropBox>
    </>
  );
}

export default AddCard;
