import "./css/App.css";
import "./css/Home.css";
import React, {Component} from "react";
import { Route, Routes} from "react-router";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import PostPage from "./pages/PostPage";
import postData from "./data/posts.json";
import {useState} from "react";


export default function App(){

  const [currPosts, setPosts] = useState(postData);

  function editPost(id, newPost) {
    setPosts((prev) => {
    return prev.map(function(post){
        if(post.id == id){
            return newPost;
        }
        return post;
    })
})
}

  function addPost(newPost){
    setPosts((prev) => {
        return([newPost, ...prev])
    });
}
  
  function deletePost(id){
    setPosts((prev) => {
        return prev.filter((post) => {
            console.log("Post id: ", post.id)
            console.log("Passed Id: ", id)
            return post.id !== id;
        })
    })
}

  return(
  <div class="whole"> 
    <Sidebar currPosts={currPosts} addPost={addPost}/>
    <div className="newdiv">
    <Routes>
      <Route path="/" element={<Home currPosts={currPosts} editPost = {editPost} addPost={addPost} deletePost={deletePost}/>}/>
      <Route path="/account" element={<Account />} />
      <Route path="/posts/:id" element={<PostPage currPosts={currPosts} editPost = {editPost} deletePost={deletePost} />} />
    </Routes>
    </div>
  </div>
  );
}

