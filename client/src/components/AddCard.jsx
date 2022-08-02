import React, { useEffect, useState } from "react";
import DropBox from "./DropBox";
import classes from "../styles/AddCard.module.css";
import FileInput from "./FileInput";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setCard } from "../feactures/card/cardSlice";
import { useNavigate } from "react-router-dom";

export function CardInput({ onSubmit, initialState = {}, toggle, setToggle }) {
  const [image, setImage] = useState();
  const [text, setText] = useState("");
  const [imgError, setImgError] = useState(false);
  const [imgErrorMsg, setImgErrorMsg] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      image,
      text,
    });
    setImage(null);
    setText("");
  }

  useEffect(() => {
    initialState.image && setImage(initialState.image);
    initialState.text && setText(initialState.text);
    console.log(
      "🚀 ~ file: AddCard.jsx ~ line 30 ~ useEffect ~ initialState",
      initialState
    );
  }, [initialState]);

  return (
    <>
      <DropBox toggle={toggle} setToggle={setToggle}>
        <h2>Add Card</h2>
        <form onSubmit={handleSubmit}>
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

function AddCard() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.image);
    formData.append("text", data.text);

    try {
      await dispatch(setCard(formData)).unwrap();
      toast.success("Card added successfully");
    } catch (error) {
      toast.error("Error");
    }
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
      <CardInput onSubmit={onSubmit} toggle={toggle} setToggle={setToggle} />
    </>
  );
}

export default AddCard;
