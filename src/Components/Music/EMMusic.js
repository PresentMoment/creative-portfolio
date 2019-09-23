import React, { Component } from "react";

export default class EMMusic extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.sidebarOpen ? "emScreen" : "em"}>
        <div className="em-container">
          <div className="em-image1">
            <img src="/images/emmusic1.jpg" alt="" />
          </div>
          <div className="em-text">
            <p>
              Original music, production, photography and design by Robert
              Girardin
            </p>
            <p>
              Label art by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.roeerosen.com/the-blind-merchant"
              >
                Roee Rosen
              </a>
            </p>
            <p>
              Published by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://paltoflats.com/"
              >
                Palto Flats
              </a>
              , New York City
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.vice.com/en_au/article/qvnq8x/r-girardin-emotional-music-stream-interview"
            >
              <p>Interview with Vice Magazine</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://paltoflats.bandcamp.com/album/r-girardin-emotional-music"
            >
              <p>Purchase Vinyl/Digital</p>
            </a>
          </div>
        </div>
        <iframe
          title="em"
          style={{ border: 0, width: "600px", height: "120px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2215300614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless
        />
      </div>
    );
  }
}
