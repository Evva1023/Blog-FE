import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container flex">
      <div>
    <h1>Welcome back</h1>
    <Link to="/login" className="link">Login</Link>
    <Link to="/register" className="link">Create Account</Link>
    </div>
    </div>
  );
};