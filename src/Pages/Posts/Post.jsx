import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).catch(() => setIsError(true));
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  if (isError) {
    return <p>Ooops something goes wrong!</p>;
  }

  return (
    <div>
      <Navbar />
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link> ({post.body})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
