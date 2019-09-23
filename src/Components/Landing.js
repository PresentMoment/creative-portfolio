import React, { Component } from "react";
import "./Styles/LandingStyle.css";

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="nameTag">
          <h3 id={this.props.sidebarOpen ? "tagAfter" : "tagBefore"}>
            is a musician, film maker and writer living in Germany
          </h3>
        </div>
        <div className={this.props.sidebarOpen ? "name" : "nameAfter"}>
          <h1>RobertGirardin</h1>
        </div>
      </div>
    );
  }
}
