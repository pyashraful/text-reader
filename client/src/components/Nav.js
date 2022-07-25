import React, { useState } from "react";
import Account from "./Account";
import AddCart from "./AddCard";
import { Link } from "react-router-dom";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header">
      <header>
        <div className="logo">
          <Link to="/">
            <img
              classname="logo_image"
              src="logo12.png"
              alt="Wall of Wonder. Click for home."
            />
          </Link>
        </div>
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
