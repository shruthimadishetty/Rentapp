import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Signup() {
  return (
    <Link to="signup">
      <button className="button">Signup</button>
    </Link>
  );
}

export default Signup;
