import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class White extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.sidebarOpen ? "videoScreen" : "video"}>
        <div className="white-text">
          <p>Music video for 'Covered In White' by Jaws (Hundebiss, Milan)</p>
        </div>
        <ReactPlayer
          className="videoPlayer"
          url="https://vimeo.com/44297911"
          playing
        />
      </div>
    );
  }
}
