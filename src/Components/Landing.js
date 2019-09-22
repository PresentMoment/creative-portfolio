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
          <h3
            style={{
              color: this.props.sidebarOpen ? "lightgrey" : "#000"
            }}
          >
            is a musician, film maker and writer living in Germany
          </h3>
        </div>
        <div className="name">
          <h1>RobertGirardin</h1>
        </div>
      </div>
    );
  }
}
