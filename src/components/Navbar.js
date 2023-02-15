import React from "react";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <br/>
      <Link to="/register">Create Account</Link>
    </nav>
  );
};