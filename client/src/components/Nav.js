import React, { useState } from "react";
import Account from "./Account";
import AddCart from "./AddCard";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

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
              <AddCart />
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
