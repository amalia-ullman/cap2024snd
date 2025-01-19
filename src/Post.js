

export default function Post(props){

    const arr = props.tags.map(function(tag, idx){
        return <span className={tag.class} key={idx+tag.name}>{tag.name}</span>
    })

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
    </div>
    
    );
  }