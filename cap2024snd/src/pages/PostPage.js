import React from "react";
import { useParams } from "react-router";
import Post from "../components/Post";

export default function PostPage({ currPosts, editPost, deletePost }) {
  const { id } = useParams();

  let foundPost = currPosts.find((post) => {
    return post._id == id;
  });

  console.log(foundPost);

  return (
    <div>
      <h1>
        <Post
          key={id + foundPost.title}
          title={foundPost.title}
          content={foundPost.content}
          author={foundPost.author}
          tags={foundPost.tags}
          deletePost={deletePost}
          _id={foundPost._id}
          editPost={editPost}
        />
      </h1>
    </div>
  );
}
