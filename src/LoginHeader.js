import React from "react";

import "./LoginHeader.css";
import logo from "./images/facebook-logo.png";

import { Link } from "react-router-dom";

function LoginHeader() {
  return (
    <div className="header">
      <Link className="link" to="/">
        <img src={logo} alt="facebook logo" className="header__logo" />
      </Link>

      <Link className="register" to="/register">
        <button className="header__button">Create New Account</button>
      </Link>
    </div>
  );
}

export default LoginHeader;
