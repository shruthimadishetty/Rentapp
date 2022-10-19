import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Login() {
  return (
    <Link to="Login">
      <button className="btn">Login</button>
    </Link>
  );
}

export default Login;
