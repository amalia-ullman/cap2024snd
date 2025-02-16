import React, {useState} from "react";
import PostForm from "./PostForm";
import "./Form.css";

export default function Post(props){

    const arr = props.tags.map(function(tag, idx){
        return <span key={idx+tag}>{tag}</span>
    })
    const [edit, setEdit] = useState(false);

    const toggleEdit = () => {
        setEdit(!edit);
    }

    const [openModal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!openModal);
    }

   const deletePost = () => {
        toggleModal();
        props.deletePost(props.id);
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
        <PostForm 
            key={props.key}
            editMode={true}
            post = {{
                title:props.title,
                content:props.content,
                author:props.author,
                tags:props.tags,
                id:props.id
            }}
            submit = {props.editPost}
        />
        <div><button onClick={toggleModal}>Delete</button><div className={"openModal requires-no-scroll" && openModal} > {openModal ?  
            <div className="form"><h1>Are you sure?</h1>
            <div className="buttons">
                <button onClick={deletePost} className="deleteButton" >Yes, I'm sure</button>
                <button onClick={toggleModal} className="closeButton">Close</button>
            </div>
            </div>
            : null}
            </div>
    </div>
    </div>
    
    );
  }