import React, { Component } from "react";
import VimeoPlayer from "react-player";
import "../Styles/MonumentsStyle.css";

export default class Monuments extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.sidebarOpen ? "monumentsScreen" : "monuments"}>
        <div className="monument-vid">
          <VimeoPlayer url="https://vimeo.com/198787549" />
        </div>

        <div className="monument-text">
          <p>
            The Monuments of Orange County is a video adaptation of a lecture I
            presented at Lausanne, Switzerland art-space No Conformism in April
            of 2016, which itself was a distillation of my then in-progress book
            Orange County Travel Guide. The lecture focused on the unlikely
            monuments found in this postmodern suburb: structures both
            intentional and accidentally monumental which spoke to the
            particular social and economic conditions of Orange County. The
            video utilizes formal, static shots of the monuments with off-screen
            narration directly imported from my lecture notes. The segments are
            bracketed by driving shots (driving being the dominant mode of
            transportation in the region), each soundtracked by a different band
            with roots in Orange County.
          </p>
        </div>
      </div>
    );
  }
}
