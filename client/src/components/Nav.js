import React, { useState } from "react";
import Account from "./Account";
import AddCart from "./AddCard";
import { Link } from "react-router-dom";
import TextBox from "./TextBox";
import classes from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <div>
      <header>
        <nav className={classes.nav}>
          <div className={classes.container}>
            <div className={classes.header}>
              <div className="logo">
                <Link to="/">
                  <img
                    className="logo_image"
                    src="logo12.png"
                    alt="Wall of Wonder. Click for home."
                  />
                </Link>
              </div>
              <div className={classes.nav_link}>
                <div className={classes.nav_button_container}>
                  <div>
                    <AddCart />
                  </div>
                  <div>
                    <TextBox />
                  </div>
                </div>
                <div className={classes.Account_container}>
                  <Account />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
