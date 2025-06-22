import React from "react";
import "../css/Home.css";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Home({ currPosts, editPost, addPost, deletePost }) {
  const [currTag, setTag] = useState("All");
  const [loggedInUser, setloggedInUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const navigate = useNavigate();

  let filteredPosts = currPosts.filter(function (post) {
    return post.tags.some(function (tagObj) {
      return tagObj === currTag || currTag === "All";
    });
  });

  let posts = filteredPosts.map(function (post, idx) {
    return (
      <Post
        key={idx + post.title}
        title={post.title}
        content={post.content}
        author={post.author}
        tags={post.tags}
        deletePost={deletePost}
        _id={post._id}
        editPost={editPost}
      />
    );
  });

  function updateCurrTag(e) {
    setTag(e.target.value);
  }

  return (
    <div>
      <select value={currTag} onChange={updateCurrTag}>
        <option value="All">All</option>
        <option value="LD">LD</option>
        <option value="PF">PF</option>
        <option value="Neg">Neg</option>
        <option value="Aff">Aff</option>
      </select>
      {loggedInUser ? (
        <>
          <h1>hello, {loggedInUser.username}!</h1>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              setloggedInUser(null);
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => navigate(`/login`)}>Login</button>
      )}
      <div class="container">
        {/* <div class="column"> */}
        {posts}
        {/* </div> */}
      </div>
    </div>
  );
}
