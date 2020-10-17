import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class Diced extends Component {
  render() {
    return (
      <div className={this.props.nav ? "videoScreen" : "video"}>
        <div className="diced-vid-text">
          <p>Music video for 'Diced By Light' by Jaws (Hundebiss, Milan)</p>
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className="videoPlayer"
            url="https://vimeo.com/94675373"
          />
        </div>
      </div>
    );
  }
}
