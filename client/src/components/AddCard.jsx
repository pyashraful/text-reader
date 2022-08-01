import React, { useState } from "react";
import DropBox from "./DropBox";
import classes from "../styles/AddCard.module.css";
import FileInput from "./FileInput";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setCard } from "../feactures/card/cardSlice";
import { useNavigate } from "react-router-dom";

// function EidtCard() {
//   return <div>Edit Card</div>;
// }

function AddCard() {
  const [toggle, setToggle] = useState(false);
  const [image, setImage] = useState();
  const [imgError, setImgError] = useState(false);
  const [imgErrorMsg, setImgErrorMsg] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("text", text);
    e.preventDefault();

    try {
      dispatch(setCard(formData)).unwrap();
      toast.success("Card added successfully");
    } catch (error) {
      toast.success("Error");
    }

    setImage(null);
    setText("");
  };

  const handleToggle = () => {
    if (!user) {
      navigate("/login");
    } else {
      setToggle(!toggle);
    }
  };

  return (
    <>
      <div onClick={handleToggle} className="nav_button">
        add card
      </div>
      <DropBox toggle={toggle} setToggle={setToggle}>
        <h2>Add Card</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.file_container}>
            <FileInput
              image={image}
              setImage={setImage}
              setImgErrorMsg={setImgErrorMsg}
              setImgError={setImgError}
            />
          </div>
          {imgError && <p className={classes.error}>{imgErrorMsg}</p>}
          <input
            type="text"
            placeholder="Enter text here..."
            value={text}
            onChange={onChange}
            required
            className={classes.text_input}
          />
          <button type="submit" className={`btn ${classes.card_submit}`}>
            Submit
          </button>
        </form>
      </DropBox>
    </>
  );
}

export default AddCard;
