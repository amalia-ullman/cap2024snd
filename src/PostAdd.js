import React, {useState} from "react";

export default function PostAdd(props){
    const [formValues, setFormValues] = useState({
        title: "",
        content: "",
        tags: [
        ]
    });

    const [authorValues, setAuthorValues] = useState({
        name:"",
        age:0,
        pfp:""
    })

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            title:formValues["title"],
            content:formValues["content"],
            author:authorValues,
            tags:formValues["tags"]
        };
        props.addPost(newData);
        setFormValues({
            title: "",
            content: "",
            tags: [
            ]
        });
        setAuthorValues({
            name:"",
            age:0,
            pfp:""
        });

    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Title" value={formValues.title} onChange={handleChange}/><br/>
                <label>Tags:</label><br/>
                <input type="checkbox" id="LD" name="LD" value="LD" onChange={handleChange}/>
                <label htmlFor="LD">LD</label><br/>
                <input type="checkbox" id="PF" name="PF" value="PF" onChange={handleChange}/>
                <label htmlFor="PF">PF</label><br/>
                <input type="checkbox" id="Aff" name="Aff" value="Aff" onChange={handleChange}/>
                <label htmlFor="Aff">Aff</label><br/>
                <input type="checkbox" id="Neg" name="Neg" value="Neg" onChange={handleChange}/>
                <label htmlFor="Neg">Neg</label><br/>
                <input name="content" placeholder="Details" value={formValues.content} onChange={handleChange}/><br/>
                <input name="name" placeholder="Username" value={authorValues.name} onChange={handleAuthorChange}/><br/>
                <input name="age" placeholder="Age" value={authorValues.age} onChange={handleAuthorChange}/><br/>
                <input type="submit"></input>
            </form>
        </div>
    )
}