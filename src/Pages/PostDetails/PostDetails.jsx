import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

function PostDetails() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      ).catch(() => setIsError(true));
      const data = await response.json();
      setPost(data);
    }

    fetchPost();
  }, [postId]);
  if (isError) {
    return <p>Ooops something goes wrong!</p>;
  }

  if (!post) {
    return <div>Loading Post...</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>{post.title}</h1>
      <p>Body: {post.body}</p>
    </div>
  );
}

export default PostDetails;
