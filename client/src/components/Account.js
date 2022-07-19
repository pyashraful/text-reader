import React from "react";

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

      <div>signup</div>
      <div>signin</div>
    </div>
  );
}
