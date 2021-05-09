import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

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

  let contentPosition = {};
  const [isScrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    contentPosition = document.body.getBoundingClientRect();
    if (contentPosition.top < 8) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    if (!isScrolling) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  return (
    <Router>
      <NavBar
        musicOpen={music}
        toggleMusic={toggleMusic}
        videosOpen={videos}
        toggleVideos={toggleVideos}
        photosOpen={photos}
        togglePhotos={togglePhotos}
        writingOpen={writing}
        toggleWriting={toggleWriting}
        isScrolling={isScrolling}
      />
    </Router>
  );
}
