import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../feactures/auth/authSlice";

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
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>Ashrafull</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={onLogout}
          >
            logout
          </span>
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
