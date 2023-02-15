import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
  return (
    <>
    <h1>Welcome back</h1>
    <hr/>
    <Link to="/login">Login</Link>
    <br/>
    <Link to="/register">Create Account</Link>
    </>
  );
};