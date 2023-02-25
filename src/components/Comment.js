import React, {useState} from "react";

function Comment ({user, comment}) {

    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    function handleLike() {
        setLike(like +1)
    }
    function handledisLike() {
        setDislike(dislike +1)
    }

    return (
        <div className = 'commentList'> 
            <h4 className = 'user'>{user}</h4>
            <div className = 'comment'>{comment}</div>
            <button onClick = {handleLike} value ={like}>{like}👍</button>
            <button onClick = {handledisLike}value = {dislike}>{dislike}👎</button>
        </div>
    )
}

export default Comment