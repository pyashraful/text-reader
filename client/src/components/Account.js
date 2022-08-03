import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../feactures/auth/authSlice";
import { resetCard } from "../feactures/card/cardSlice";
import { MdLogout } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import classes from "../styles/Account.module.css";

export default function Account() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function onLogout() {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetCard());
  }

  return (
    <div className={classes.account}>
      {user ? (
        <>
          <MdOutlineAccountCircle className={classes.account_icon} />
          <span>{user.name}</span>
          <MdLogout onClick={onLogout} className={classes.account_icon} />
        </>
      ) : (
        <>
          <Link to="/register">signup</Link>
          <Link to="/login">signin</Link>
        </>
      )}
    </div>
  );
}
