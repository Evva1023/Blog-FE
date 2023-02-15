import React from "react";
import { Link } from "react-router-dom";

export const Posts = () => {
  const posts = [
    {
        id: "1",
        title: "Title One",
        desc: "Lorem ipsum more text needed here",
        img: "https://images.pexels.com/photos/11108129/pexels-photo-11108129.jpeg"
    },
    {
        id: "2",
        title: "Title Two",
        desc: "Lorem ipsum more text needed here",
        img: "https://images.pexels.com/photos/11108129/pexels-photo-11108129.jpeg"
    }
  ];

  return (
    <section className="posts flex">
        {posts.map(post => (
            <div className="post flex" key={post.id}>
                <div className="post-img">
                    <img src={post.img} alt="" />
                </div>
                <div className="post-content">
                    <Link to={`/post/${post.id}`}>
                        <h1 className="post-title">{post.title}</h1>
                    </Link>
                    <p className="post-desc">{post.desc}</p>
                    <button>Read More</button>
                </div>

            </div>
        ))}
    </section>
  );
};