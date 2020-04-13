import React, { Component } from "react";
import "../Styles/KeysStyle.css";

export default class Keys extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.nav ? "keysScreen" : "keys"}>
        <div className="keys-container">
          <div className="keys-image1">
            <img src="images/keysfront.jpg" alt="" />
          </div>
          <div className="keys-text">
            <p>
              Original music and production by Robert Girardin. <br />
              Photography by Robert Girardin. <br />
              Designed by Robert Girardin and Simone Trabucchi
            </p>

            <p>
              Published by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hundebissrecords.bigcartel.com/"
              >
                Hundebiss
              </a>
              , Milan
            </p>
          </div>
          <div className="keys-image1">
            <img id="stfull" src="images/keysback.jpg" alt="" />
          </div>
          <div className="keys-image2">
            <img src="images/keysfold1.jpg" alt="" />
          </div>
          <div className="keys-image3">
            <img src="images/keysfold2.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
