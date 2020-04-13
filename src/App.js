import React, { useState } from "react";

import NavBar from "./Components/NavBar";

export default function App() {
  const [music, setMusic] = useState(false);
  const toggleMusic = () => {
    setMusic(!music);
    setVideos(false);
    setPhotos(false);
    setWriting(false);
  };
  const [videos, setVideos] = useState(false);
  const toggleVideos = () => {
    setVideos(!videos);
    setMusic(false);
    setPhotos(false);
    setWriting(false);
  };
  const [photos, setPhotos] = useState(false);
  const togglePhotos = () => {
    setPhotos(!photos);
    setMusic(false);
    setVideos(false);
    setWriting(false);
  };
  const [writing, setWriting] = useState(false);
  const toggleWriting = () => {
    setWriting(!writing);
    setMusic(false);
    setVideos(false);
    setPhotos(false);
  };

  return (
    <div>
      <NavBar
        musicOpen={music}
        toggleMusic={toggleMusic}
        videosOpen={videos}
        toggleVideos={toggleVideos}
        photosOpen={photos}
        togglePhotos={togglePhotos}
        writingOpen={writing}
        toggleWriting={toggleWriting}
      />
    </div>
  );
}
