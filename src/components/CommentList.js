import React from "react";
import Comment from "./Comment";

function CommentList ({displayComments, setDisplayComments, comments}) {

    

    return (
        <div className = 'CommentList'> 
        <h3>{comments.length} Comments</h3>
            {comments.map(comment =>
                displayComments ? <Comment key = {comment.id} user = {comment.user} comment = {comment.comment} /> : null
            )}
        </div>
    )
}

export default CommentList