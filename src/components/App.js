import React, {useState} from "react";
import video from "../data/video.js";
import Vid from "./Vid"
import Title from "./Title"
import CommentList from "./CommentList"

function App() {

  const [displayComments, setDisplayComments] = useState(true)



  return (
    <div>
      <Vid video = {video}/>
      <Title displayComments = {displayComments} setDisplayComments = {setDisplayComments} video = {video}/>
      <CommentList displayComments = {displayComments} setDisplayComments = {setDisplayComments} comments = {video.comments}/>
    </div>
  );
}

export default App;
