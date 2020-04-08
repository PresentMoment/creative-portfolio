import React from "react";
import night from "./rain2.mp4";
import day from "./day.mp4";

const BackgroundVideo = ({ clicked }) => {
  return (
    <>
      <div className="video">
        <video autoPlay="autoplay" loop="loop" muted playsInline key={clicked}>
          <source src={clicked ? day : night} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default BackgroundVideo;
