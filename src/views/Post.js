import React from "react";
import {Link} from "react-router-dom";

export const Post = () => {
  return (
    <div className="post">
    <div>
      <img src="" alt="" />
      <div className="user">
        <img src="" alt="" />
        <p>John</p>
        <span>Posted 2 days ago</span>
      </div>
      <Link to="/write">Edit</Link>
      <Link to="/post">Delete</Link>
    </div>
    <h1>Post Title</h1>
    <p>Post text content</p>
    </div>
  );
};