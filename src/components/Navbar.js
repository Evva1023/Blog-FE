import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/login" className="link">Login</Link>
      <Link to="/register" className="link">Create Account</Link>
    </nav>
  );
};