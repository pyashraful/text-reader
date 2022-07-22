import React from "react";
import Account from "./Account";

export default function Nav() {
  return (
    <div className="header">
      <header>
        <h1 className="logo">
          {/* <a href="#">
                <img
                src="img/header-logo.svg"
                alt="Wall of Wonder. Click for home."
                />
              </a> */}
          Text Reader
        </h1>
        <nav>
          <ul className="nav_links">
            <li>
              <a href="#">add card</a>
            </li>
            <li>
              <a href="#">Text Box</a>
            </li>
            <li>
              <Account />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
