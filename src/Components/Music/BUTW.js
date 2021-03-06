import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../Styles/BUTWStyle.css";
import ClipLoader from "react-spinners/ClipLoader";

export default class BUTW extends Component {
  state = {
    loading: true,
  };

  hideSpinner = () => {
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <div className={this.props.nav ? "butwScreen" : "butw"}>
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
            {this.state.loading ? (
              <div className="loading">
                <ClipLoader color={"#AEAEAE"} />
              </div>
            ) : null}
            <ReactPlayer
              onLoad={this.hideSpinner}
              url="https://soundcloud.com/blowinguptheworkshop/zerogrow"
            />
          </div>
        </div>
        <div className="butw-img">
          <img src="images/butw2.png" alt="" />
        </div>
      </div>
    );
  }
}
