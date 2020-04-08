import React, { Component } from "react";

export default class Development extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.sidebarOpen ? "contactScreen" : "contact"}>
        <p>
          <span>
            I build apps and websites (including this one) using JavaScript and
            React.js
          </span>
          <br />
          <span style={{ display: "inline-block", height: "3rem" }} />

          <a
            href="https://presentmoment.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My development portfolio
          </a>
        </p>
      </div>
    );
  }
}
