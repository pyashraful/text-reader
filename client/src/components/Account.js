import React from "react";
import { Link } from "react-router-dom";
export default function Account() {
  return (
    <div className="account">
      <div>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <span>Ashrafull</span>
        <span
          className="material-icons-outlined"
          title="Logout"
          // onClick={logout}
        >
          logout
        </span>
      </div>

      <Link to="/register">signup</Link>
      <Link to="/login">signin</Link>
    </div>
  );
}
