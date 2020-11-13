import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// when using Link it needs a button click to traverse to that link/path

// when using useHistory it re-directs automatically to given path

import "./Login.css";

import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory("");

  const handleSubmit = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history.push("/"); // redirects to path="/"
      })
      .catch((error) => {
        console.log("ERROR OBJECT: " + error);

        if (
          error.message ===
          "The password is invalid or the user does not have a password."
        ) {
          alert("Please check your credentials");
        } else if (
          error.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          history.push("/register");
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth",
          });
        } else {
          alert(error.message);
        }
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="login__container">
        <h3>Login to Facebook</h3>
        <form onSubmit={handleSubmit}>
          <center>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </center>
          <center>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </center>
          <center>
            <button type="submit" className="login__login">
              Login
            </button>
          </center>
          <center>
            <h6>Forgot Password</h6>
          </center>
          <center>
            <hr />
          </center>
          <center>
            <Link to="/register">
              <button className="login__createNewAccount">
                Create New Account
              </button>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
