import React, { Component } from "react";
import "./Styles/LandingStyle.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="nameTag">
          <h3 id={this.props.nav ? "tagAfter" : "tagBefore"}>
            testing cpanel.yml
          </h3>
        </div>
        <div className={this.props.nav ? "nameAfter" : "name"}>
          <h1>RobertGirardin</h1>
        </div>
      </div>
    );
  }
}
