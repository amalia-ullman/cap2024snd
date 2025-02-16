import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import Post from "./Post";
import PostForm from "./PostForm";
import postData from "./posts.json";
import {useState} from "react";


export default function Home(){
    const [currTag, setTag] = useState("All");
    const [currPosts, setPosts] = useState(postData);



    let filteredPosts = currPosts.filter(function (post) {
        return post.tags.some(function (tagObj) {
            return tagObj === currTag || currTag === "All";
        })
    })

    console.log(filteredPosts);

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

    let posts = filteredPosts.map(function(post, idx){
        return (<Post 
        key={idx + post.title}
        title={post.title}
        content={post.content}
        author={post.author}
        tags={post.tags}
        deletePost={deletePost}
        id={post.id}
        editPost={editPost}

        />)
    })

    


    function updateCurrTag(e) {
        setTag(e.target.value);
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
        <div>
        <PostForm editMode={false} submit={addPost} length={currPosts[0].id}/>
        <select value={currTag} onChange={updateCurrTag}>
            <option value="All">All</option>
            <option value="LD">LD</option>
            <option value="PF">PF</option>
            <option value="Neg">Neg</option>
            <option value="Aff">Aff</option>
        </select>
            <div class="container">
                {/* <div class="column"> */}
                    {posts}
                {/* </div> */}
            </div>
            </div>

    );
}