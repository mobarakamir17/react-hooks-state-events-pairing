import { useState } from "react";
import video from "../data/video.js";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      

      <div className="video-info">
        <h2>{video.title}</h2>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <button> 👍 {video.upvotes}</button>
        <button> 👎 {video.downvotes}</button>

      </div>

      <button className="hide-comments-button" onClick={handleToggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      <hr className="horizontal-line" />
      
      {showComments && (
        <div>
          <h2>
           {video.comments.length === 1
            ? "1 Comment"
            : `${video.comments.length} Comments`}
          </h2>
          {video.comments.map((comment) => (
            <div key={comment.id}>
              <h3>User: {comment.user}</h3>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;