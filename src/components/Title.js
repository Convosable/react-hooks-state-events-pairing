import React from 'react';
import Likes from './Likes'

function Title({video, displayComments, setDisplayComments}) {

    function handleCommentDisplay() {
        setDisplayComments(displayComments => !displayComments);
        console.log('hide comments')
    }

    return (
        <div className = 'Title'>
            <h1>{video.title}</h1>
            <div>{video.views} Views | Uploaded {video.createdAt}</div>
            <Likes video = {video}/>
            <button onClick = {handleCommentDisplay} value = {displayComments}> {displayComments ? 'Hide Comments' : 'Show Comments'}</button>
        </div>
    )
}

export default Title;