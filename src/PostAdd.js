import React, {useState} from "react";

export default function PostAdd(){
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

        console.log(authorValues);
    };

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setFormValues((prev) => {
            return{
                ...prev,
                [name]:value,
        };
        });

       // console.log(formValues);
    };


    return(
        <div>
            <form>
                <input name="title" placeholder="Title" value={formValues.title} onChange={handleChange}/><br/>
                <label>Tags:</label><br/>
                <input type="checkbox" id="LD" name="LD" value="LD"/>
                <label for="LD">LD</label><br/>
                <input type="checkbox" id="PF" name="PF" value="PF"/>
                <label for="PF">PF</label><br/>
                <input type="checkbox" id="Aff" name="Aff" value="Aff"/>
                <label for="Aff">Aff</label><br/>
                <input type="checkbox" id="Neg" name="Neg" value="Neg"/>
                <label for="Neg">Neg</label><br/>
                <input name="content" placeholder="Details" value={formValues.content} onChange={handleChange}/><br/>
                <input name="name" placeholder="Username" value={authorValues.name} onChange={handleAuthorChange}/><br/>
                <input name="age" placeholder="Age" value={authorValues.age} onChange={handleAuthorChange}/><br/>
                <input type="submit"></input>
            </form>
        </div>
    )
}