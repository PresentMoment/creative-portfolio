import React, { Component } from "react";

export default class EMMusic extends Component {
  render() {
    return (
      <div className="em">
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
              Label art from{" "}
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
          <div className="em-image2">
            <img src="/images/emmusic2.jpg" alt="" />
          </div>
        </div>
        <iframe
          style={{ border: 0, width: "100%", height: "120px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2215300614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless
        />
      </div>
    );
  }
}
