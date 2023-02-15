import React from "react";
import {Link} from "react-router-dom";

export const Login = () => {
  return (
    <>
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
    <Link to="/register" className="link">No account? Register now</Link>
    </>
  );
};