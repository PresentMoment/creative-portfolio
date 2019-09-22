import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class White extends Component {
  render() {
    return (
      <div className="video">
        <div className="white-text">
          <p>Music video for 'Covered In White' by Jaws (Hundebiss, Milan)</p>
        </div>
        <ReactPlayer url="https://vimeo.com/44297911" />
      </div>
    );
  }
}
