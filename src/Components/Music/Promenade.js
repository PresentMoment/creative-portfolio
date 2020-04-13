import React, { Component } from "react";
import "../Styles/PromenadeStyle.css";
import ScaleLoader from "react-spinners/ScaleLoader";

export default class Promenade extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  hideSpinner = () => {
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <div className={this.props.nav ? "promenadeScreen" : "promenade"}>
        <div className="promenade-container">
          <div className="promenade-image1">
            <img src="images/promenade.jpg" alt="" />
          </div>
          <div className="promenade-text">
            <p>
              Original music, production, photography and design by Robert
              Girardin
            </p>
            <p>
              Published by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hundebissrecords.bigcartel.com/"
              >
                Hundebiss Records
              </a>
              , Milan
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hundebissrecords.bandcamp.com/"
            >
              <p>Purchase</p>
            </a>
          </div>
        </div>
        {this.state.loading ? (
          <ScaleLoader
            color={"#DCD9DA"}
            css={`
              align-self: center;
            `}
            width={136}
          />
        ) : null}
        <iframe
          className="bandcamp"
          title="em"
          style={{
            border: 0,
            width: "100%",
            height: "120px",
          }}
          onLoad={this.hideSpinner}
          src="https://bandcamp.com/EmbeddedPlayer/album=612625473/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless
        />
      </div>
    );
  }
}
