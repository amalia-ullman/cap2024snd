import tagTypes from "./Tags.js"

class Post{
    constructor(author, title, tags, content){
        this.author = author;
        this.title = title;
        this.tags = tags;
        this.content = content;
    }

    validateTags(tags){
        return(tags.filter(tag => Object.values(tagTypes).includes(tag)));
    }

    addTag(tag){
        if(Object.values(tagTypes).includes(tag) && !(this.tags.includes(tag))){
            this.tags.push(tag);
        }
    }
}

export default Post;