import React, { Component } from "react";
import "../css/Sidebar.css";
import { Link } from "react-router";
import PostForm from "./PostForm";

export default function Sidebar({ addPost, currPosts }) {
  return (
    <div class="sidebar">
      <Link to="/account">
        <div class="user">
          <i class="fa-solid fa-user fa-2x"></i>
        </div>
      </Link>
      <div class="plus">
        <PostForm editMode={false} submit={addPost} />
      </div>
      <Link to="/">
        <div class="home">
          <i class="fa-solid fa-home fa-2x"></i>
        </div>
      </Link>
    </div>
  );
}
