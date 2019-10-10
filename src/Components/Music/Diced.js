import React, { Component } from "react";
import "../Styles/DicedStyle.css";

export default class Diced extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.sidebarOpen ? "dicedScreen" : "diced"}>
        <div className="diced-container">
          <div className="diced-image1">
            <img src="images/dicedfront.jpg" alt="" />
          </div>
          <div className="diced-text">
            <p>
              Original music and production by Robert Girardin. <br />
              Designed by Robert Girardin.
            </p>

            <p>
              Published by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://paltoflats.com/"
              >
                Hundebiss
              </a>
              , Milan
            </p>
          </div>
          <div className="diced-image1">
            <img id="stfull" src="images/dicedback.jpg" alt="" />
          </div>
          <div className="diced-image1">
            <img src="images/dicedfold1.jpg" alt="" />
          </div>
          <div className="diced-image1">
            <img src="images/dicedfold2.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
