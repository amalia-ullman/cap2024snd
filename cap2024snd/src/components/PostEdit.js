import React, {useState} from "react";
import postData from "./posts.json";
import "./Form.css";

const possibleTags = ["LD", "PF", "Aff","Neg"];

export default function PostEdit(props){

    const [formValues, setFormValues] = useState({
        title: props.title,
        content: props.content,
        tags: props.tags
    });

    const [authorValues, setAuthorValues] = useState({
        name:props.author.name,
        age:props.author.age,
        pfp:props.author.pfp
    })

    const [openModal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!openModal);
    }

    const handleAuthorChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        
        setAuthorValues((prev) => {
            return{
                ...prev,
                [name]:value,
            };
        })
    };

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let type = e.target.type;

        setFormValues((prev) => {

            if(type == "checkbox"){
                if(e.target.checked){
                    return{
                        ...prev,
                        tags:[...prev["tags"],value]
                    }
                }
                else{
                    console.log(e.target.checked);
                    console.log(value);
                    return{
                        ...prev,
                        tags:prev["tags"].filter((tag) => tag !== value)
                    }
                }
            }

            return{
                ...prev,
                [name]:value,
        };
        });

       // console.log(formValues);
    };

    const tagsList = possibleTags.map((tag, idx) => {
        return (<div key={tag + idx}><input type="checkbox" id={tag} name={tag} value={tag} onChange={handleChange} checked={formValues.tags.includes(tag)}/>
            <label htmlFor={tag}>{tag}</label><br/></div>)
    })


    const handleSubmit = (e) => {
        toggleModal();
        e.preventDefault();
        const newData = {
            title:formValues["title"],
            content:formValues["content"],
            author:authorValues,
            tags:formValues["tags"],
            id:props.id
        };
        props.editPost(props.id, newData);

    }


    return(
        //openModal ? "openModal" : ""
        <div><button onClick={toggleModal}>Edit Post</button><div className={openModal && "openModal requires-no-scroll"} > {openModal ?  
            <form onSubmit={handleSubmit} className="form">
                <button onClick={toggleModal} className="closeButton">Close</button>
                <input name="title" placeholder="Title" value={formValues.title} onChange={handleChange}/><br/>
                {tagsList}
                <input name="content" placeholder="Details" value={formValues.content} onChange={handleChange}/><br/>
                <input name="name" placeholder="Username" value={authorValues.name} onChange={handleAuthorChange}/><br/>
                <input name="age" placeholder="Age" value={authorValues.age} onChange={handleAuthorChange}/><br/>
                <input type="submit"></input>
            </form>
            : null}
            </div>
        </div>
    )
}