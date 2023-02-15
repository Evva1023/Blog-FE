import React from "react";
import {Link} from "react-router-dom";

export const Register = () => {
  return (
    <>
    <h1>Register</h1>
    <form>
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email Address" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />
      <button>Create Account</button>
    </form>
    <Link to="/login" className="link">Already have an account? Login now</Link>
    </>
  );
};