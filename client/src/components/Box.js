import React, { useEffect, useState } from "react";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  getCard,
  deleteCard,
  editCard,
  reset,
} from "../feactures/card/cardSlice";
import { selecteText } from "../feactures/speak/speakSlice";

import { CardInput } from "./AddCard";
import useRead from "../hooks/useRead";

const Box = () => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);
  const [initialState, setInitialState] = useState({});
  const { selected } = useSelector((state) => state.speak);
  console.log("🚀 ~ file: Box.js ~ line 20 ~ Box ~ selected", selected);
  const { isReading, speakText } = useRead(selected);

  const dispatch = useDispatch();
  const { cards, isLoading, isError, isSuccess, massage } = useSelector(
    (state) => state.card
  );

  function handleDelete(id) {
    dispatch(deleteCard(id));
  }

  function handleEdit(card) {
    console.log("Edit");
    setToggle(!toggle);
    setInitialState({
      id: card._id,
      image: card.imageUrl,
      text: card.text,
    });
  }

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("file", data.image);
    formData.append("text", data.text);
    const newData = { id: initialState.id, formData };

    try {
      await dispatch(editCard(newData)).unwrap();
      setInitialState({});
      dispatch(getCard());
      toast.success("Card updated successfully");
    } catch (error) {}
  }

  function handleSpeak(text, id) {
    speakText(text);
    setActive(id);
  }

  useEffect(() => {
    dispatch(getCard());
  }, [dispatch]);

  return (
    <div className="main">
      {cards.map((card, index) => (
        <div key={index} className="box_container">
          <div
            onClick={() => handleSpeak(card.text, index)}
            className={`box ${active === index && isReading ? "box_glow" : ""}`}
          >
            <img
              src={
                card.image
                  ? window.location.origin + `${card.image}`
                  : card.imageUrl
              }
              alt="text"
            />

            <p className="info">{card.text}</p>
          </div>
          {card._id ? (
            <>
              <div className="box_edit">
                <button
                  className="box_edit_btn"
                  onClick={() => handleEdit(card)}
                >
                  Edit
                  <MdModeEditOutline size={16} />
                </button>
              </div>
              <div className="box_delete">
                <button
                  className="box_delete_btn"
                  onClick={() => handleDelete(card._id)}
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </>
          ) : null}
        </div>
      ))}

      <CardInput
        onSubmit={onSubmit}
        toggle={toggle}
        setToggle={setToggle}
        initialState={initialState}
      />
    </div>
  );
};

export default Box;
