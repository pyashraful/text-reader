import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../feactures/auth/authSlice";
import { MdLogout } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function Account() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function onLogout() {
    console.log("logout");
    dispatch(logout());
    dispatch(reset());
  }

  return (
    <div className="account">
      {user ? (
        <>
          <MdOutlineAccountCircle />
          <span>{user.name}</span>
          <MdLogout onClick={onLogout} />
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
