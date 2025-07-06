import "./css/App.css";
import "./css/Home.css";
import React, { Component } from "react";
import { Route, Routes } from "react-router";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import PostPage from "./pages/PostPage";
import postData from "./data/posts.json";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function App() {
  const [currPosts, setPosts] = useState([]);
  const [jwt, setjwt] = useState(
    JSON.parse(localStorage.getItem("user"))?.token
  );
  const navigate = useNavigate();

  console.log(jwt);

  useEffect(() => {
    console.log("empty dependency use effect");
    axios
      .get("http://localhost:8080/api/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function editPost(id, newPost) {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`
    };
    axios
      .put(`http://localhost:8080/api/posts/${id}`, newPost, headers)
      .then((data) => {
        setPosts((prev) => {
          return prev.map(function (post) {
            if (post._id == id) {
              return {
                _id: post._id,
                ...newPost
              };
            }
            return post;
          });
        });
      })
      .catch((err) => console.log(err));
  }

  function addPost(newPost) {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`
    };
    axios
      .post("http://localhost:8080/api/posts", newPost, headers)
      .then((data) => {
        setPosts((prev) => {
          return [newPost, ...prev];
        });
      })
      .catch((err) => console.log(err));
  }

  function deletePost(id) {
    navigate(`/`);
    axios
      .delete(`http://localhost:8080/api/posts/${id}`)
      .then(() => {
        setPosts((prev) => {
          return prev.filter((post) => {
            return post._id !== id;
          });
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div class="whole">
      <Sidebar currPosts={currPosts} addPost={addPost} />
      <div className="newdiv">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                currPosts={currPosts}
                editPost={editPost}
                addPost={addPost}
                deletePost={deletePost}
              />
            }
          />
          <Route path="/account" element={<Account />} />
          <Route
            path="/posts/:id"
            element={
              <PostPage
                currPosts={currPosts}
                editPost={editPost}
                deletePost={deletePost}
              />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
