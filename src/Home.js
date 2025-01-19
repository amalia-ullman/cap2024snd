import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import Post from "./Post";
import postData from "./posts.json";
import {useState} from "react";


export default function Home(){
    const [currTag, setTag] = useState("All");



    let filteredPosts = postData.filter(function (post) {
        return post.tags.some(function (tagObj) {
            return tagObj.name === currTag || currTag === "All";
        })
    })

    console.log(filteredPosts);

    let posts = filteredPosts.map(function(post, idx){
        return (<Post 
        title={post.title}
        content={post.content}
        author={post.author}
        tags={post.tags}

        />)
    })


    function updateCurrTag(e) {
        setTag(e.target.value);
    }

    return(
        <div class="whole">

        
        <Sidebar />
        <div class="newdiv">
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
        </div>
    );
}