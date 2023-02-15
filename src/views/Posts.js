import React from "react";
import {Link} from "react-router-dom";

export const Posts = () => {
  const posts = [
    {
        id: "1",
        title: "Title One",
        desc: "Lorem ipsum more text needed here",
        img: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "2",
        title: "Title Two",
        desc: "Lorem ipsum more text needed here",
        img: "https://images.pexels.com/photos/1738991/pexels-photo-1738991.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section>
        {posts.map(post => (
            <div key={post.id}>
                <div>
                    <img src={post.img} alt="" style={{width: "200px"}}/>
                </div>
                <div>
                    <Link to={`/post/${post.id}`}>
                        <h1>{post.title}</h1>
                    </Link>
                    <p>{post.desc}</p>
                    <button>Read More</button>
                </div>

            </div>
        ))}
    </section>
  );
};