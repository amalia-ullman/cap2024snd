import React, {useState} from "react";
import PostEdit from "./PostEdit";

export default function Post(props){

    const arr = props.tags.map(function(tag, idx){
        return <span key={idx+tag}>{tag}</span>
    })
    const [edit, setEdit] = useState(false);

    const toggleEdit = () => {
        setEdit(!edit);
    }

    return(
        <div class="post">
        <div class="postheader">
            <div class="pfp">
                <img src={props.author.pfp} />
            </div>
            <h2 class="title">{props.title}</h2>
        </div>
        <p>{props.content}</p>
        <div class="tags">
            {arr}
        </div>
        <PostEdit 
            key={props.key}
            title={props.title}
            content={props.content}
            author={props.author}
            tags={props.tags}
            id={props.id}
            editPost = {props.editPost}
        />
        <button onClick={() => props.deletePost(props.id)}>Delete</button>
    </div>
    
    );
  }