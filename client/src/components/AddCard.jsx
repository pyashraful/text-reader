import React, { useState } from "react";
import DropBox from "./DropBox";
import classes from "../styles/AddCard.module.css";
import FileInput from "./FileInput";
import axios from "axios";
import { toast } from "react-toastify";

function AddCard() {
  const [toggle, setToggle] = useState(false);
  const [image, setImage] = useState();
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", image);
    formData.append("text", text);

    try {
      const response = await axios({
        method: "post",
        url: "/image",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (response.statusCode === 200) {
        toast.success("Card added successfully");
        setImage(null);
        setText("");
      }
    } catch (err) {
      toast.error("Error adding card");
    }
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
            required
            className="text-input"
          />
          <button type="submit">Submit</button>
        </form>
      </DropBox>
    </>
  );
}

export default AddCard;
