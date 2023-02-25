import React,{useState} from 'react';

function Likes({video}) {

    const [likeCount, setLikeCount] = useState(video.upvotes);
    const [dislikeCount, setDislikeCount] = useState(video.downvotes);


    function handleLike() {
        setLikeCount(likeCount + 1);
    }   

    function handleDislike() {
        setDislikeCount(dislikeCount + 1);
    }

    return (
        <div className = 'Likes'>
            <button onClick = {handleLike} value = {likeCount}>{likeCount}👍</button>
            <button onClick = {handleDislike} valiue = {dislikeCount}>{dislikeCount}👎</button>
        </div>
    )
}

export default Likes;