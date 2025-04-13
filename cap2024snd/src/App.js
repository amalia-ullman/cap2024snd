import "./css/App.css";
import "./css/Home.css";
import React, { Component } from "react";
import { Route, Routes } from "react-router";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import PostPage from "./pages/PostPage";
import postData from "./data/posts.json";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [currPosts, setPosts] = useState([]);

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
    setPosts((prev) => {
      return prev.map(function (post) {
        if (post.id == id) {
          return newPost;
        }
        return post;
      });
    });
  }

  function addPost(newPost) {
    axios
      .post("http://localhost:8080/api/posts", newPost)
      .then((data) => {
        setPosts((prev) => {
          return [newPost, ...prev];
        });
      })
      .catch((err) => console.log(err));
  }

  function deletePost(id) {
    setPosts((prev) => {
      return prev.filter((post) => {
        console.log("Post id: ", post.id);
        console.log("Passed Id: ", id);
        return post.id !== id;
      });
    });
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
        </Routes>
      </div>
    </div>
  );
}
