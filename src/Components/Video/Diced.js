import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class Diced extends Component {
  render() {
    return (
      <div className="video">
        <div className="diced-text">
          <p>Music video for 'Diced By Light' by Jaws (Hundebiss, Milan)</p>
        </div>
        <ReactPlayer url="https://vimeo.com/94675373" />
      </div>
    );
  }
}
