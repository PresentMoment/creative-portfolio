import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class BUTW extends Component {
  render() {
    return (
      <div className="butw">
        <div className="butw-text">
          <h3>
            "Equal Release" by Zero Grow (Robert Girardin and Elon Katz)
            <br />
            for Matthew Kent's{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://blowinguptheworkshop.com"
            >
              Blowing Up The Workshop
            </a>{" "}
            series, London <br />
            Artwork by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://spencerlongo.us/"
            >
              Spencer Longo
            </a>
          </h3>
          <div className="soundCloud">
            <ReactPlayer url="https://soundcloud.com/blowinguptheworkshop/zerogrow" />
          </div>
        </div>
        <div className="butw-img">
          <img src="/images/butw2.png" alt="" />
        </div>
      </div>
    );
  }
}
