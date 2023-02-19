import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.png";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Blog App Logo" />
    </Link>
  );
};