import React from "react";

import { Link } from "react-router-dom";

import logo from "./images/facebook-logo.png";

import "./RegisterHeader.css";

function RegisterHeader() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logo} alt="facebook-logo" className="header__logo" />
        </Link>
      </div>
      <div className="header__right">
        <form>
          <input type="email" placeholder="Email" className="header__input1" />
          <input
            type="password"
            placeholder="Password"
            className="header__input2"
          />
          <button type="submit" className="header__submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterHeader;
