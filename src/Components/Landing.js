import React, { Component } from "react";
import "./Styles/LandingStyle.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="nameTag">
          <span id={this.props.nav ? "tagAfter" : "tagBefore"}>
            is a musician, film maker and writer living in NYC
          </span>
        </div>
        <div className={this.props.nav ? "nameAfter" : "name"}>
          <span>RobertGirardin</span>
        </div>
      </div>
    );
  }
}
