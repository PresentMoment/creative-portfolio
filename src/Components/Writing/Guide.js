import React, { Component } from "react";
import "../Styles/GuideStyle.css";

export default class Guide extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.sidebarOpen ? "guideScreen" : "guide"}>
        <div className="guide-text">
          <p>
            Full length book investigating the social and mental consequences of
            Orange County, California.
            <br /> Presented as a travel guide.
          </p>
        </div>
        <div className="button-container">
          <div className="guideButton">
            <a href="https://drive.google.com/open?id=15oY8-HcdLtgGNUivhEPsNwB_Nurb_MJG">
              <button>Open PDF</button>
            </a>
          </div>
          <div className="imgButton">
            <img src="/images/guide.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
