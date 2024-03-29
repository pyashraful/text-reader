import React from "react";
import Account from "./Account";
import AddCart from "./AddCard";
import { Link } from "react-router-dom";
import TextBox from "./TextBox";
import classes from "../styles/Nav.module.css";
import logo from "./Logo12.png";

export default function Nav() {
  return (
    <div className={classes.header}>
      <header>
        <nav className={classes.nav}>
          <div className={classes.container}>
            <div className={classes.logo_container}>
              <div className={classes.logo}>
                <Link to="/">
                  <img
                    className={classes.logoImg}
                    // src={window.location.origin + "/img/logo12.png"}
                    src={logo}
                    alt="text reader logo"
                  />
                </Link>
              </div>
            </div>
            {/* <div className={classes.nav_link}> */}
            <div className={classes.nav_button_container}>
              <div>
                <AddCart />
              </div>
              <div>
                <TextBox />
              </div>
            </div>
            <div className={classes.nav_account_container}>
              <Account />
            </div>
            {/* </div> */}
          </div>
        </nav>
      </header>
    </div>
  );
}
