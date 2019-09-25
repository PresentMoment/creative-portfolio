import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class Diced extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.sidebarOpen ? "videoScreen" : "video"}>
        <div className="diced-text">
          <p>Music video for 'Diced By Light' by Jaws (Hundebiss, Milan)</p>
        </div>
        <ReactPlayer
          className="videoPlayer"
          url="https://vimeo.com/94675373"
          playing
        />
      </div>
    );
  }
}