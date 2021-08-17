import React from "react";

const Video = (props) => {
  return (
    <div className="video-container">
      <div className="video-info">
        <h3>{props.title}</h3>
        <p>{props.dateAdded}</p>
        <h4>{props.channel}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Video;
