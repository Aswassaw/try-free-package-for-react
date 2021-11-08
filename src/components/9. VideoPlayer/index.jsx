import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=y1KailItMws&t=3s'
        controls
        width='480px'
        height='240px'
        onReady={() => console.log("onReady callback")}
        onStart={() => console.log("onStart callback")}
        onPause={() => console.log("onPause callback")}
        onEnded={() => console.log("onEnded callback")}
        onError={() => console.log("onError callback")}
      />
    </div>
  );
};

export default VideoPlayer;
