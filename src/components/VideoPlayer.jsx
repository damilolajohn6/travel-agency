import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
        Our Success Story
      </h1>

      <div className="w-full max-w-[1000px] h-[auto] aspect-video">
        <ReactPlayer
          url={videoUrl}
          controls
          width="100%"
          height="100%"
          className="rounded-lg overflow-hidden shadow-lg"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
