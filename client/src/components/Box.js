import React, { useEffect } from "react";
import data from "../data";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { getCard, deleteCard, reset } from "../feactures/card/cardSlice";

const Box = ({ speakText, setText }) => {
  const dispatch = useDispatch();
  const { cards, isLoading, isError, isSuccess, massage } = useSelector(
    (state) => state.card
  );

  useEffect(() => {
    dispatch(getCard());
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(deleteCard(id));
  }

  const res = data();
  // console.log(speakText);
  return (
    <div className="main">
      {cards.map((card, index) => (
        <div key={index} className="box_container">
          <div onClick={() => speakText(card.text)} className="box">
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
            <div className="box_delete">
              <button
                className="box_delete_btn"
                onClick={() => handleDelete(card._id)}
              >
                <MdDeleteOutline />
              </button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Box;
